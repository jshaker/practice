/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (!nums1.length && !nums2.length) { throw new Error('Invalid input'); }
    var medianIndex = (nums1.length + nums2.length - 1) / 2;
    if (medianIndex === 0) {
        if (nums1.length) { return nums1[0]; }
        if (nums2.length) { return nums2[0]; }
    }
    if (medianIndex % 1 === 0) {
        var i = 0;
        var j = 0;
        var count = 0;
        var median;
        while (count < medianIndex + 1) {
            if (nums1[i] != null && nums1[i] < nums2[j] || nums2[j] == null) {
                median = nums1[i++];
            } else {
                median = nums2[j++];
            }
            count++;
        }
        return median;
    } else {
        var firstMedianIndex = Math.floor(medianIndex);
        var secondMedianIndex = Math.ceil(medianIndex);
        var i = 0;
        var j = 0;
        var count = 0;
        var firstMedian;
        var secondMedian;
        while (count < secondMedianIndex + 1) {
            secondMedian = firstMedian;
            if (nums1[i] != null && nums1[i] < nums2[j] || nums2[j] == null) {
                firstMedian = nums1[i++];
            } else {
                firstMedian = nums2[j++];
            }
            count++;
        }
        return (firstMedian + secondMedian) / 2;
    }
};
console.log('result', findMedianSortedArrays([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22], [0,6]));
