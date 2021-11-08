(async () => {
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const date1 = new Date(Math.random() * 1000).toUTCString();
    await delay(1000);
    const date2 = new Date(Math.random() * 1000).toUTCString();
    await delay(1000);
    const date3 = new Date(Math.random() * 1000).toUTCString();
    await delay(1000);
    const date4 = new Date(Math.random() * 1000).toUTCString();



    let datas = [];

    datas.push(date1);
    datas.push(date2);
    datas.push(date3);
    datas.push(date4);

    datas.sort();

    console.log(datas);
})();