// console.log("A")
// console.log("B")
// console.log("C")

// const promise =new promise((resolve,reject)=>{

//     const success= true;
//  if (success){
//     console.log("Done")
//  }
//  else{
//     console.log("NO")
//  }
// })
//  promise.then(res=>{console.log(res)})
//  .catch(err=>{console.log(err)})


// console.log("A")
// console.log("B")
// console.log("C")

// const promise =new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("Done")
//   },0)
//   console.log("D")
// })
//  promise.then(res=>{console.log(res)})
//  .catch(err=>{console.log(err)})


console.log("A");
console.log("B");
console.log("C");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hi");
        resolve("Done");
    }, 2000);

    console.log("D");
});

promise
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    });