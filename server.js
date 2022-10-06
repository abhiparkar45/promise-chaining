const scanPassbook = (id) => {
    console.log("scanning passbook ...");
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(id < 10){
                console.log(`scanned successfully ! Bank account number : ${id}`)
                resolve("128.6.3.1");
            }
            else{
                reject(new Error("Oops, scanning failed ! Please try again later !"));
            }
        },3000,id)
    })
}

const connectWithServer = (ip) =>{
    console.log("Connecting with Server...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(ip === "128.6.3.1"){
                console.log(`connected successfully !`)
            resolve(1);
            }
            else{
                reject(new Error("Connection failed ! Please check your internet connection "));
            }
        },3000,ip)
    })
}

const getTransactions = (status) => {
    console.log("getting transaction to print...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(status === 1){
                console.log("transaction retrieved successfully !");
                resolve([{transactionID:1},{transactionID:2},{transactionID:3}]);
            }else{
                reject(new Error("internal server error !"));
            }
        },4000,status)
    })
}
const printTransactions = (data) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(data){
            console.log(data);
            console.log(`printed successfully !`);
            resolve(200);
        }
            else{
                reject(new Error("Printing failed ! please try again later"))
            }
        },3000,data)
    })

}
const end = (statusCode) =>{
    console.log(`Almost done ! please wait ...`)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(statusCode === 200){
                resolve('Task complete ! Please collect your passbook !')
            }

        },3000,statusCode)
    })
}
scanPassbook(7)
    .then((ip)=>connectWithServer(ip))
    .then((res)=>getTransactions(res))
    .then((tran)=>printTransactions(tran))
    .then((statusCode)=>end(statusCode))
    .then((endRes)=>console.log(endRes))
    .catch((err)=>console.log(err.message))