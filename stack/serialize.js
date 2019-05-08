/**
 * @param {*} ctx
 * @param {*} next
 */
module.exports = async (ctx, next) => {
  await ctx.ApiPack.serialize();
  await next();
};
