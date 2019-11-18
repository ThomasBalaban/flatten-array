function flattenArray(data) {
    var returnValue = [];
    for(var i = 0; i < data.length; i++) {
        if(Array.isArray(data[i])) {
            returnValue = returnValue.concat(flattenArray(data[i]));
        } else {
            returnValue.push(data[i]);
        }
    }
    return returnValue;
}

flattenArray( [[1,2,[3]],4] )