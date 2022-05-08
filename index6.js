const myPromise = new Promise(
    function(reslove,reject){
        setTimeout(()=>reslove("I AM FROM INDIA"),3000);
    }
);
myPromise.then(
    function(value){
        console.log(value);

    }
)