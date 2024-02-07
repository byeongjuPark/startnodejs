// Promise는 요청에 대해 응답이 준비되었을 때 알림을 주는 알리미 역할
function work(sec, callback){
    setTimeout(() => {
        callback(new Date().toISOString());
    },sec  * 1000);
};

work(1, (result) => {
    console.log('first work', result);
});

work(1, (result) => {
    console.log('second work', result);
});

work(1, (result) => {
    console.log('Third work', result);
});