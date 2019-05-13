const MethodToCode = {
  post: 201,
  delete: 204
};

/**
 * @param {*} ctx
 * @param {*} next
 */
module.exports = async (ctx, next) => {
  const operation = ctx.ApiPack.operation;

  const status = operation.status
    ? operation.status
    : MethodToCode[operation.method]
    ? MethodToCode[operation.method]
    : 200;

  ctx.status = status;
  ctx.body = ctx.ApiPack.operation.data;
  await next();
};
