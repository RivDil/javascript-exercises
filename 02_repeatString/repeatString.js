const repeatString = function(str,num) {
    if (num < 0){
        return 'ERROR'
    }
    let multi = '';
    for (let i= 0;i < num;i++){
        multi += str;
    }
    return multi
};

// Do not edit below this line
module.exports = repeatString;
