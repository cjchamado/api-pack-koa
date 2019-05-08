/**
 * @param {*} ctx
 * @param {*} next
 */
module.exports = async (ctx, next) => {
  ctx.status = ctx.ApiPack.operation.status || 200;
  ctx.body = ctx.ApiPack.operation.data;
  await next();
};
