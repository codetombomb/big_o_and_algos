function sameFrequency(num1, num2) {
    // convert both arguments to strings; split and sort them.
    let new1 = num1.toString().split('').sort();
    let new2 = num2.toString().split('').sort();
    // If the length doesn't match, return false;
    if (new1.length !== new2.length) {
        return false;
    }
    // Iterate over the first converted number and compare to the same index in the second array. Since it is sorted, the numbers should be the same. If not, retrun false.
    for (let i = 0; i < new1.length; i++) {
        if (new1[i] !== new2[i]) {
            return false;
        }
    }
    // If we get to this point, the return value must be true.
    return true;
}