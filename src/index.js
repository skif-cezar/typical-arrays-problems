
exports.min = function min (array) {
    if(!array || array.length == 0){
        return 0;
    }else {
        array.sort((a, b) => a - b);
        return (array.shift());
    };
};

exports.max = function max (array) {
    if(!array || array.length == 0){
        return 0;
    }else {
        array.sort((a, b) => a - b);
        return (array.pop());
    }
};

exports.avg = function avg (array) {
    if(!array || array.length == 0){
        return 0;
    }else {
        return (array.reduce((a, b) => (a + b)) / array.length);
    }
};
