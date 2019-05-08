/**
 * @param {*} ctx
 * @param {*} next
 */
module.exports = async (ctx, next) => {
  await ctx.ApiPack.check();
  if (ctx.ApiPack.errors("checker").length) {
    ctx.status = ctx.ApiPack.operation.status || 401;
    ctx.body = ctx.ApiPack.errors("checker");
    return;
  }
  await next();
};
