
// const promiseOne = new Promise( function(resolve,reject){
//     setTimeout(()=>(
//         console.log("task in progress"),
//         resolve()
//     ),3000)
// } )
// promiseOne.then(()=>{
//     console.log('promised resolved');
// })



// new Promise( function(resolve,reject){
//     setTimeout(()=>{
//         console.log('async text two is completed');
//         resolve();
//     },1000)
// }).then(()=>{
//     console.log('text completed ');
// })




// const promiseTwo = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('async task')
//         resolve(
//             {
//                 name:'Aman Gupta',
//                 age:22,
//             }
//         )
//     } , 1000)
// })
// promiseTwo.then(( user )=>{
// console.log(user);
// })



// !code // yah check kare ga ki value false hai ki nahi 

let code = true;
if(!code){
    console.log(true);
}else(
    console.log(false)
)




// const promiseThree = new Promise( (resolve,reject)=>{

//         setTimeout(()=>{
//             console.log("hello world ");
//                 resolve({
//             username:'Aman Gupta',
//             password:123
//         });
//         },1000)
    

// })

// promiseThree.then((data)=>{
//     console.log(data.username)
// })



// const promiseFour = new Promise( (resolve,reject)=>{
//     setTimeout(()=>{
//         let num = true ;
//         if(!num){ // check num === false 
//             reject("Reject value ");
//         }else{
//             resolve(
//                 {
//                     username:'Aman Gupta',
//                     password:123
//                 }
//             );
//         }
//     },1000)
// })

// promiseFour.then( (data)=>{
// return data.username;
// }).then( (user)=>{
//     console.log(user);
// }).catch( (data)=>{
//     console.log(data);
// })
// .finally( ()=>{
//     console.log("hello");
// })


// const promiseFive = new Promise((resolve, reject )=>{
//     setTimeout( ()=>{
//         let error = false;
//         if(!error){
//             reject("Error Error");
//         }else{
//             resolve(
//                     {
//                         username:'Aman Gupta',
//                         password:123
//                     }
//                     );
//         }
//     },2000)
// })

// async function comsumePromise(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }
    
//     catch (error){
//         console.log('Error ',error);
//     }
// }

// comsumePromise();




fetch(`https://dummyjson.com/posts`)
.then((res)=>res.json())
.then((data)=>(console.log(data)))
.catch((error)=>{console.log(error)})



// async function post(){
//    const res =  await fetch(`https://dummyjson.com/posts`)
//    const data = await res.json();
//    console.log(data);
// }

// post();
