//https://www.npmjs.com/package/httpreq
//https://www.npmjs.com/package/httpntlm

import * as dotenv from "dotenv";

dotenv.config();


var httpntlm = require('httpntlm');



class sharepointserachbyNTLM {


    search(query: string) {

        let url= `https://microsoft.sharepoint.com/_api/search/query?querytext=%27${query}%27&clienttype=%27ContentSearchRegular%27`;

        let options = {
            url: url,
            username: process.env.NTLM_username,
            password: process.env.NTLM_Password,
            workstation: process.env.NTLM_workstation,
            domain: process.env.NTLM_Domain,
            headers: {

                'Accept': 'application/json;odata=verbose;charset=utf-8'
            },
        };

        console.log(options);
        // Return new promise 
        return new Promise(function (resolve, reject) {
            // Do async job
            httpntlm.get(options, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }
}

export { sharepointserachbyNTLM }


