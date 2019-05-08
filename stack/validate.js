/**
 * @param {*} ctx
 * @param {*} next
 */
module.exports = async (ctx, next) => {
  await ctx.ApiPack.validate();
  if (ctx.ApiPack.errors("validator").length) {
    ctx.status = ctx.ApiPack.operation.status || 400;
    ctx.body = ctx.ApiPack.errors("validator");
    return;
  }
  await next();
};
