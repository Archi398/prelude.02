function first(array, n = 1) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return i + 1
        }
    }

}


console.log(first([5, 4, 3, 2, 1], 4));