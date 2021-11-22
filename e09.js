function without(array) {
    let tab = [];
    let found = false;
    for (let i = 0; i < array.length; i++) {
        found = false;
        for (let j = 0; j < arguments.length; j++) {
            if (arguments[j] == array[i]) { 
                found = true; 
            }
        }
        if (!found) { 
            tab.push(array[i]); 
        }
    }
    return tab;
}

console.log(without([1, 2, 1, 0, 3, 1, 4], [0, 1, 3, 4]));