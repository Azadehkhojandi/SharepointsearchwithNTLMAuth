//https://www.npmjs.com/package/httpreq
//https://www.npmjs.com/package/httpntlm

import {sharepointsearchparser} from './sharepointsearchParser';
import * as fs from 'fs';

var httpntlm = require('httpntlm');

class sharepointserachbyNTLM {
    mocksearch(query: string)
    {
        return new Promise(function (resolve, reject) {
            let test = fs.readFileSync("test.json").toString();
            let parsedresult=new sharepointsearchparser().parse(test);
            resolve(parsedresult);
        });

    }
    search(query: string) {

        let url= `${process.env.SharepointSearchUrl}/_api/search/query?querytext=%27${query}%27&clienttype=%27ContentSearchRegular%27`;
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

        // Return new promise 
        return new Promise(function (resolve, reject) {
            // Do async job
            httpntlm.get(options, function (err, res) {
                if (err) {
                    reject(err);
                } else {
                    let parsedresult=new sharepointsearchparser().parse(res);
                    resolve(parsedresult);
                }
            });
        });
    }
}

export { sharepointserachbyNTLM }


