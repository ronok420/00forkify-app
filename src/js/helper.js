import { TIME_OUT } from "./config";
const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
  };
  console.log('hi')




export const getJSON  = async function (url) {
   try{
       const fetchPro= fetch(url);
       const res =  await  Promise.race([fetchPro,timeout(TIME_OUT)]);
       const data = await res.json();
       if(!res.ok) throw new Error( `${data.message} (${res.status})`);
       return data;

   }
   catch(err){
    // console.log(err);
    throw err;//if   use  this   code   this   will   pass the error    in another  file   whic  is   responsible to call this  async  function   ,   and    acording to  that  try  block.
   }
}