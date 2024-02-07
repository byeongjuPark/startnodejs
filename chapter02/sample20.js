console.log(0)

setTimeout(function () {
    console.log('Hello'); // delay 로 인해서 비동기 처리함 -> 콜백 큐에 담기게 됨
}, 0);
console.log(1);