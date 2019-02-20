function isRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let count = 0;
    count = isRotationHelper(str1, str2, count);
    if (count > 0){
        count = isRotationHelper(str1, str2, count);
    }
    return count > 0;
}

function isRotationHelper(str1, str2, count) {
    for(let i = 0; i < str2.length && count < str2.length; i++) {
        if (str2[i] === str1[count]) {
            count++;
        } else {
            count = 0;
        }
    }
    return count;
}

console.log(isRotation('waterbottle', 'erbottlewat'), true);
console.log(isRotation('waterbottle', 'erbotlewatt'), false);
console.log(isRotation('aaata', 'aataa'), true);
