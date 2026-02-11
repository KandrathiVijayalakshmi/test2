let myPromise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        const success = true; // we can give false also 
        if (success){
            resolve("operation successfull");
        } else{
            reject(new Error ("operation failed"));
        }
    },1000);
});

myPromise
.then((result)=> {
    console.log(result);
}) 
.catch((error) => {
console.log(error.message);
})
.finally(()=> {
    console.log("promise settled (completed)");
});