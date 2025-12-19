onmessage = function(e) {
    console.time('heavyOperation');

    const items = [];
    for(let i = 1; i < e.data; i++) {
        items.push({value: i^2});
    }

    console.log(items)

    console.timeEnd('heavyOperation');
  
    postMessage('Finished');
  }