const Query = {
  users: async (parent, args, ctx, info) => {
    const user = await ctx.prisma.query.users(args, info);
    return user;
  },
  me: async (parent, args, ctx, info) => {
    if (!ctx.request.userId) {
      return null;
    }
    const user = await ctx.prisma.query.user({ where: { id: ctx.request.userId } }, info)
    return user;
  },

  recipes: async (parent, args, ctx, info) => {
    const recipes = await ctx.prisma.query.recipes(args, info)
    return recipes;
  },
  recipe: async (parent, args, ctx, info) => {
    const recipe = await ctx.prisma.query.recipe(args, info)
    return recipe;
  }

};

module.exports = Query;
