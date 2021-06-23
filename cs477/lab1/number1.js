Array.prototype.even = function(){
   const arr =[];
   for(let key of this){
       if(key%2===0){
           arr.push(key)
       }
   }
   return arr;
}

const evenNumbers=[1,2,3,4,5,6].even();
console.log(evenNumbers)


Array.prototype.odd = function(){
   return this.filter((item)=>item%2!==0)  
 }
 
 const oddnumber=[1,2,3,4,5,6].odd();
 console.log(oddnumber)

