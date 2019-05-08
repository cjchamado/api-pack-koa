const Router = require("koa-router");
const Stack = require("./stack");
const router = new Router();

module.exports = (apiPack, operations) => {
  operations.map(operation => {
    const method = operation.method.toLowerCase();
    router[method](
      operation.path,
      async (ctx, next) => {
        operation.context = {
          request: ctx.request,
          errors: {
            checker: [],
            validator: []
          }
        };

        apiPack.operation = operation;

        /** @todo Verificar a possibilidade de uso so ctx.state */
        ctx.ApiPack = apiPack;

        await next();
      },
      ...Stack
    );
  });
  return router;
};
