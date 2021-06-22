/higher order function (higher order function)

const ismethod= va=>(va*6);
 const myHOCFn=(data,fn)=>{
     let val=data*3;
     return fn(val);
     //fn will have is method function
 }
 //passing functions into the functions
 let ref=myHOCFn(1000,ismethod);
 console.log(ref);
