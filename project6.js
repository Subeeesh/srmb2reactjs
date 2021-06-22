const temp=val=>(val*3)


const myHOCFn=(data,fn)=>{

let val=data*9;
return fn(val);

}

const res2=myHOCFn(100,(x)=>(x*3));
console.log(res2);
