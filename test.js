// Import with es6
require('dotenv').config()
const {default:rockset} = require("@rockset/client");
const axios = require("axios");


const getData = async()=>{
    try{
    const response = await axios({
        method:"post",
        url:"https://api.usw2a1.rockset.com/v1/orgs/self/ws/dev/lambdas/tn_pc-getAllMeetings/tags/latest ",
        headers:{
                "Authorization": 'ApiKey',
                "Content-Type": 'application/json' 
                },
     
        data:{
            "parameters": [
              {
                "name": "eventId",
                "type": "string",
                "value": "21kOONLxRlEofMY47gxWCBGxTzW"
              }
            ]
        
          }
    })
    console.log(response.data.results);
}catch(err){
    console.log(err)
}
    
}
getData();


// {
//     "sql": {
//       "query": "SELECT * FROM dev.dev_tn_pc_v2  WHERE eventId = :eventId",
//       "generate_warnings": "true",
//       "parameters": [
//         {
//           "name": "_id",
//           "type": "string",
//           "value": "e978d63e-f9e4-48cb-5f89-814cc5a9c18a"
//         }
//           , {
//           "name": "eventId",
//           "type": "string",
//           "value": "W1JNg-ImIaOn355AmSVya"
//         }
//       ],
//       "default_row_limit": "123",
//       "paginate": "true",
//       "initial_paginate_response_doc_count": "123"
//     },
//     "async_options": {
//       "client_timeout_ms": "123",
//       "timeout_ms": "123",
//       "max_initial_results": "123"
//     }
// }
