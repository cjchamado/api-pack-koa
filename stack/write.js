/**
 * @param {*} ctx
 * @param {*} next
 */
module.exports = async (ctx, next) => {
  await ctx.ApiPack.write();
  await next();
};
