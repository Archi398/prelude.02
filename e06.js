/* function without(array) {
    let newArray = []
    let flag = true
    for (let i = 0; i < array.length; i++) {
        for (let index = 1; index < arguments.length; index++) {
            if (array[i] != arguments[index] && flag) {
                newArray.push(array[i])
                flag = false
            }
            else if (array[i] === arguments[index]) {
                flag = false
            }
        }
        flag = true
    }
    return newArray
}

console.log(without([1, 2, 1, 0, 3, 1, 4], 1, 0)); */

function without(array) {
    let tab = [];
    let found = false;
    for (let i = 0; i < array.length; i++) {
        found = false;
        for (let j = 0; j < arguments.length; j++) {
            if (arguments[j] == array[i]) { 
                found = true; }
        }
        if (!found) { tab.push(array[i]); }
    }
    return tab;
}
console.log(without([1, 2, 1, 0, 3, 1, 4], 0, 1, 3, 4));