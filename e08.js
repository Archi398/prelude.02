function intersection() {
    let tab = [];
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j <= arguments.length; j++) {
            if(!tab.includes(arguments[i][j]) && (arguments[0].includes(arguments[i][j])) && (typeof(arguments[i][j]) != 'undefined')){
                tab.push(arguments[i][j])
            }
        }
    }
    return tab
}

console.log(intersection([1, 2, 3], [3, 101, 2, 1, 10], [2, 1, 4, 3]));