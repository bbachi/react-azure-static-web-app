const todoService = require('../functions/services/todo');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.params && req.params.id) {
        context.res = {
            status: 200,
            body: todoService.deleteTodos(context)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};