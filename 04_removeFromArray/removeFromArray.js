const removeFromArray = function(arr, ...argsToRemove) {
    return arr.filter((item) => !argsToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
