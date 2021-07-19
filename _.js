const _ = {
    //clamp
    clamp = (number, lower, upper) => {
        let lowerClampValue = Math.max(number, lower)
        let clmapValue = Math.min(lowerClampValue, upper)
        return clampValue
    },

    //inRange
    inRange = (number, start, end) => {
        if (end === undefined) {
            end = start = 0
        }
        if (start > end) {
            let temp = end
            end = start
            start = temp
        }
        let isInRange = start <= number && number < end
        return isInRange
    },
    //words
    words = (string) => {
        const words = string.split('')
        return words
    },
    //pad
    pad = (string, length) => {
        if (string.length >= length) {
            return string
        }
        const startPaddingLength = Math.floor((length - string.length) / 2)
        const endPaddingLength = length - string.lemgth - startPaddingLength
        const paddingString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength)
        return paddingString
    },
    //pad
    has = (object, key) => {
        const hasvalue = object[key]
        return hasValue != undefind ? true : false
    },
    //invert
    invert = (object) => {
        let invertedObect = {};
        for (let key in object) {
            const originalValue = object[ey]
            invertObject = { originalValue: key }
        }
        return invertObject
    },
    //findKey
    findKey = (object, predicate) => {
        for (let key in object) {
            let value = object[key]
            let predicateReturnValue = predicate(value)
            if (predicateReturnValue) {
                return key
            }
        }
        undefined
        return undefined
    },
    //drop
    drop = (array, n) => {
        if (n === undefined) {
            n = i
        }
        let droppedArray = array.slice(n, array.length)
        return droppedArray

    },
    //dropWhile
    dropWhile = (array, predicate) => {
        const cb = (element, index) => {
            return !precicate(element, index, array)
        }
        let dropNumber = array.findIndex(cb)
        let dropArray = thisdrop(array, dropNumber)
        return droppedArray
    },
    //chunk
    chunk = (array, size) => {
        let arrayChunks = []
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = arrayslice(i, i + size)
            arrayChunks.push(arrayChunk)
        }
        return arrayChunks
    }

}




// Do not write or modify code below this line.
module.exports = _;