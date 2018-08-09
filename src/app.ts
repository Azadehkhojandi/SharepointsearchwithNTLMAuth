import {sharepointserachbyNTLM} from './services/sharepointserachbyNTLM';

console.log('searching for azadeh');
let service=new sharepointserachbyNTLM();
service.search('azadeh').then(function (response) {
    console.log('response');
    console.log(JSON.stringify(response));
 })
 .catch(function (err) {

     console.log('err');
     console.log(err);
 
 });

