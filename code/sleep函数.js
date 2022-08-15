function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve,time);
    })
}

// 异步的操作
console.time('异步');
sleep(1000).then(()=>{
    console.log('异步使用sleep');
    // 不会阻塞console.timeEnd('异步') 打印
})
console.timeEnd('异步');

// 同步操作
(async function() {
    console.time('同步');
    await sleep(1000).then(()=>{
        console.log('同步使用sleep');
        // 会阻塞console.timeEnd('同步')打印
    });
    console.timeEnd('同步');
})();

// 异步的打印时间不会包括sleep的1s，同步的打印时间会包括sleep的1s