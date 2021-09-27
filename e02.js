function initial(array, n = 1){
    for (let i = array.length; i > 0; i--) {
        if (array[i] === n) {
            array.splice(i, 1)
            return array
        }
    }
}

console.log(initial([5, 4, 3, 2, 1, 4], 4))