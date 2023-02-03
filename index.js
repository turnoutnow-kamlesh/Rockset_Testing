// Import with es6
require('dotenv').config()
const {default:rockset} = require("@rockset/client");
// Import with require syntax
// const rockset = require("@rockset/client").default;

const apikey = process.env.ROCKSET_APIKEY;
const rocksetClient = rockset(apikey);
rocksetClient.queries.query({
        sql: {
            query: 'SELECT * FROM dev.dev_tn_main clear ORDER BY activityId ASC',
            generate_warnings: 'true',
            parameters: [{
                name: '_id',
                type: 'string',
                value: 'e2a2d01b-2fa4-7002-e347-13264662c14e'
            },{
                name:'sentiment',
                type:'string',
                value:'sentiment'}],
            default_row_limit: '123',
            paginate: 'true',
            initial_paginate_response_doc_count: '123'
        },
        async_options: {
            client_timeout_ms: '123',
            timeout_ms: '123',
            max_initial_results: '123'
        }
    })
    .then(console.log)
    .catch(console.error);
// const apiserver = process.env.apiServer;
// const rocksetClient = rockset(apikey, apiserver);
// console.log(rocksetClient.queryLambdas.executeQueryLambda)
// rocksetClient.queryLambdas.executeQueryLambda("dev", "GetAdminMenu","262df4893b7bf3a7", "WHERE _id = e2a2d01b-2fa4-7002-e347-13264662c14e")
//   .then(console.log)
//   .catch(console.log);
    