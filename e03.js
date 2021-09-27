function initial(array, n = 1){
    for (let i = array.length; i > 0; i--) {
        if (array[i] === n) {
            return i + 1
        }
    }
}

console.log(initial([5, 4, 3, 2, 1, 4]))