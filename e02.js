function initial(array, n = 1){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            array.splice(i, 1)
            return array
        }
    }
}

console.log(initial([5, 4, 3, 2, 1], 3))