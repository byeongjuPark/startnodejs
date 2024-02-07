setTimeout(()=>{
    setTimeout(()=>{
        console.log('Second work!');
    }, 2000);

    console.log('First Work!');
},3000)