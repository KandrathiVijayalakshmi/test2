function getData(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve("Data received");
        },2000);
    })
}

async function showData() {
   console.log("fetching data......") ; 

   const result = await getData();//waits here
   console.log(result);
   console.log("completed");
   console.log("completed1234"); // just to check async order
}
showData();


/////anther ex

async function sayhello() {
    return "Hello";
}

async function showMessage() {
    const message=await sayhello();
    console.log(message);
}
showMessage();