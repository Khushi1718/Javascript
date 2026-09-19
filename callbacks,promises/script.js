function profileLekerAao(name,cb){
    setTimeout(()=>{
        console.log("hello");
        console.log(name);
    },2000);
    setTimeout(()=>{
        cb({name:name,saved:[1,2,3,4]})}
        ,2000);
}


profileLekerAao("harsh",function(profiledata){
    console.log(profiledata);
    console.log(profiledata.name);
    console.log(profiledata.saved);
});
//callback hell is a situation where we have multiple nested callbacks which makes the code hard to read and maintain. It can be avoided by using promises or async/await syntax.
 

//promises in easy words in hinglish- app ek promise bante ho jo ki do states mei se ek state m ja skta hai and wo yah to resolve hoga yah reject
let pr = new Promise(function(res,rej){
    setTimeout(()=>{
        res("hello");
        let rn = Math.floor(Math.random()*10);
        if(rn>5){
            res("Promise resolved");
        } else {
            rej("Promise rejected");
        }
    },3000);
})
pr
.then(function(val){
    console.log(val);
})
.catch(function(err){
    console.error(err);
})