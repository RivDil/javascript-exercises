function fibonacci(num){
    if (num < 0){
        return 'OOPS'
    }
    let a = 1;
    let b = 0;
    let count = 0;
    for (let i = 0; i < num; i++){
        count = a + b;
        a = b;
        b = count;
    } 
    return count
}

// Do not edit below this line
module.exports = fibonacci;
