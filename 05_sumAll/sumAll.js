const sumAll = function(a,b) {

    if (typeof a === 'number' && a > 0 && typeof  b === 'number' && b > 0){ 
        let max = Math.max(a,b);
        let min = Math.min(a,b);
        let count = 0;
        for (let i = min; i <= max; i++){
            count += i
        }
        return count
    }else{
        return 'ERROR'
    }

};

// Do not edit below this line
module.exports = sumAll;
