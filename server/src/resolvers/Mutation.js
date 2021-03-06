const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutation = {
  updateStoreItem: async (parent, args, ctx, info) => {
    const StoreItem = await ctx.prisma.mutation.updateStoreItem(args, info);
    return StoreItem;
  },
  updateSkillType: async (parent, args, ctx, info) => {
    const SkillType = await ctx.prisma.mutation.updateSkillType(args, info);
    return SkillType;
  },
  updateUser: async (parent, args, ctx, info) => {
    const StoreItem = await ctx.prisma.mutation.updateUser(args, info);
    return StoreItem;
  },
  addGold: async (parent, args, ctx, info) => {
    const user = await ctx.prisma.query.user(args, '{ id password gold }');
    const updatedUser = await ctx.prisma.mutation.updateUser(
      { where: { id: user.id }, data: { gold: user.gold + args.goldToAdd } },
      info,
    );
    return updatedUser;
  },

  signUp: async (parent, args, ctx, info) => {
    // eslint-disable-next-line require-atomic-updates
    args.data.password = await bcrypt.hash(args.data.password, 10);
    const user = await ctx.prisma.mutation.createUser(args, info);
    return user;
  },
  signIn: async (parent, args, ctx, info) => {
    const user = await ctx.prisma.query.user({ where: { email: args.email } }, '{ id password }');
    if (!user) {
      throw new Error('WRONG_EMAIL');
    }
    const isPasswordValid = await bcrypt.compare(args.password, user.password);
    if (!isPasswordValid) {
      throw new Error('WRONG_PASSWORD');
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });

    return ctx.prisma.query.user({ where: { email: args.email } }, info);
  },
  signOut: async (parent, args, ctx, info) => {
    ctx.response.clearCookie('token');
    return { message: 'Logout' };
  },
};

module.exports = Mutation;
