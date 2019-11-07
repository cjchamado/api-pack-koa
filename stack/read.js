module.exports = async (ctx, next) => {
  ctx.ApiPack.operation.identifiers = ctx.params;
  ctx.ApiPack.operation.context.filters = JSON.parse(JSON.stringify(ctx.query));
  ctx.ApiPack.operation.context.query = JSON.parse(JSON.stringify(ctx.query));

  await ctx.ApiPack.read();

  if (!ctx.ApiPack.operation.data && ctx.method !== "POST") {
    ctx.status = 404;
    ctx.body = { message: "Not Found" };
    return;
  }

  await next();
};
