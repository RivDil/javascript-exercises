const removeFromArray = function(arr, ...arg) {
    for (let i = 0; i<arg.length; i++){

        if (arr.includes(arg[i])){
            let index = arr.indexOf(arg[i]);
            arr.splice(index,1);
        }
    
        
        
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
