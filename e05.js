function flatten(array, shallow) {
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === 'object'){
            console.log('Archibald')
        }
        if(typeof array[i] === 'number'){
            console.log('Nelson')
        }
        //console.log(typeof array[i])
        // lastItem.push(array[i]);
    }
}

console.log(flatten([1, [2], [3, [[4]]]]))
console.log(flatten([1, [2], [3, [[4]]]], true))