function fibonacci(num){
    while (num >=0){
    fibonacci(num+2)-fibonacci(num+1)
    num--
    }
}

// Do not edit below this line
module.exports = fibonacci;
