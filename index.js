// Import with es6
require('dotenv').config()
const {default:rockset} = require("@rockset/client");
// Import with require syntax
// const rockset = require("@rockset/client").default;

const apikey = process.env.ROCKSET_APIKEY;
const rocksetClient = rockset('NiJ6NGrjL8yhMM5dr9ohZE8SrBh3tGsLkCbBuE7RO6Gk1z35h24lbLnXMwgOKJIg', "https://api.usw2a1.rockset.com");
// rocksetClient.queries.query({
//         sql: {
//             query: 'SELECT * FROM dev.dev_tn_pc ORDER BY name DESC LIMIT 10',
//             generate_warnings: 'true',
//             parameters: [{
//                 name: '_id',
//                 type: 'string',
//                 value: 'b011ee5f-72bf-9405-2d78-f85d72a9d9e4'
//             },{
//                 name:'name',
//                 type:'string',
//                 value:'name'}],
//             default_row_limit: '123',
//             paginate: 'true',
//             initial_paginate_response_doc_count: '123'
//         },
//         async_options: {
//             // client_timeout_ms: '123',
//             // timeout_ms: '123',
//             max_initial_results: '123'
//         }
//     })
//     .then(console.log)
//     .catch(console.error);
// const apiserver = process.env.apiServer;
// const rocksetClient = rockset(apikey, apiserver);
// console.log(rocksetClient.queryLambdas.executeQueryLambda)
// rocksetClient.queryLambdas.executeQueryLambda("dev", "GetAdminMenu","262df4893b7bf3a7", "WHERE _id = e2a2d01b-2fa4-7002-e347-13264662c14e")
//   .then(console.log)
//   .catch(console.log);
    

rocksetClient.queryLambdas
  .executeQueryLambdaByTag('dev', 'tn_pc-getAllMeetings', 'latest', {
    /* (optional) list of parameters that may be used in the query, that overwrite default parameters */
    parameters: [{ name: 'eventId', type: 'string', value: '21kOONLxRlEofMY47gxWCBGxTzW' }],
  })
  .then(console.log)
  .catch(console.error);