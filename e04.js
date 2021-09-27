function rest(array, index = 1) {
    let lastItem = [];
    for (let i = index; i < array.length; i++) {
        lastItem.push(array[i]);
    }
    return lastItem;
}

console.log(rest([5, 4, 3, 2, 1]));