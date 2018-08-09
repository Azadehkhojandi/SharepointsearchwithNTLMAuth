import * as dotenv from "dotenv";
dotenv.config();

import {sharepointserachbyNTLM} from './services/sharepointserachbyNTLM';


let service=new sharepointserachbyNTLM();


service.search('searchterm').then(function (response) {
    
    console.log(JSON.stringify(response));
 })
 .catch(function (err) {

     console.log(err);
 
 });

