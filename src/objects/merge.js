/**
 * Recursively merges own and inherited enumerable string keyed       * properties of source objects into the destination object
 * 
 * @param {...objects} The objects to process
 * @return {object} Returns the new object of grouped elements
 *
 * @example:
 * var object = {
 *  'a': [{ 'b': 2 }, { 'd': 4 }]
 * }
 * var other = {
 *  'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * merge(object, other) => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
*/

function merge(...objects) {
    let result = {};
    for (let objIndex = 0; objIndex < objects.length; objIndex += 1) {
        if (typeof(objects[objIndex]) === 'object' && objects[objIndex].length !== 0) {
            let keys = Object.keys(objects[objIndex]) 
            for (let keyIndex = 0; keyIndex < keys.length; keyIndex += 1) {
                
                let key = keys[keyIndex]
                let value = objects[objIndex][key]
                for (let valueIndex = 0; valueIndex < value.length; valueIndex += 1) {
                    if (value[valueIndex] && value[valueIndex+1]) {
                        value = {...value[valueIndex], ...value[valueIndex+1]}
                    }
                }

                if (result[key]) {
                    result[key] = [result[key], value]
                } else {
                    result[key] = value
                }
            }

        } else {
            throw new TypeError(`${objects} is not an object`);
        }
    }
    return result
}

module.exports = merge;