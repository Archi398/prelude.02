function last(array, n = 1) {
    let lastItem = [];
    for (let i = array.length - n; i < array.length; i++) {
        lastItem.push(array[i]);
    }
    return lastItem;
}

console.log(last([5, 4, 3, 2, 1], 3));