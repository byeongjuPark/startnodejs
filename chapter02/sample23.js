function workP(sec){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

function junsFunc(){
    return 'just Function';
}

async function asyncFunc(){
    return 'async Function';
}

console.log(junsFunc());
console.log(asyncFunc());
console.log(workP());