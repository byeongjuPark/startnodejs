setTimeout(() => {
    console.log('todo: First Work!');
}, 3000);

setTimeout(()=> {
    console.log('todo: Second Work!');
}, 2000);
var a = 'var type';
console.log(a);
setTimeout((a) => console.log(a), 2000);

// callback 함수 형식으로 들어가야 함.
//setTimeout(console.log('bye'), 1000);