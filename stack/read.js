module.exports = async (ctx, next) => {
  await ctx.ApiPack.read();
  await next();
};
