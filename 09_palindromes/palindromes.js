const palindromes = function (str) {
    let regex = (/\w/g);
    let strRegex = str.match(regex).join('');
    let inverseStr = str.match(regex).reverse().join('');
    if(strRegex.toLowerCase() == inverseStr.toLowerCase()){
        return true
    }else{
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
