/**
 * @param {*} ctx
 * @param {*} next
 */
module.exports = async (ctx, next) => {
  await ctx.ApiPack.deserialize(ctx.request.body);
  await next();
};
