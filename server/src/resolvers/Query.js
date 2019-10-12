const Query = {
  storeItems: async (parent, args, ctx, info) => {
    const storeItem = await ctx.prisma.query.storeItems(args, info);
    return storeItem;
  },

  users: async (parent, args, ctx, info) => {
    const user = await ctx.prisma.query.users(args, info);
    return user;
  },

  me: async (parent, args, ctx, info) => {
    if (!ctx.request.userId) {
      return null;
    }
    const user = await ctx.prisma.query.user({ where: { id: ctx.request.userId } }, info);
    return user;
  },

  skillTypes: async (parent, args, ctx, info) => {
    const skillTypes = await ctx.prisma.query.skillTypes(args, info);
    return skillTypes;
  }
};

module.exports = Query;
