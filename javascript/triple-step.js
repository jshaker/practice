function tripleStepCount(stepCount) {
    const memo = {};
    return tripleStepCountHelper(stepCount, memo);
}

function tripleStepCountHelper(stepCount, memo) {
    if (memo[stepCount]) { return memp[stepCount]; }
    if (stepCount < 0) {
        memo[stepCount] = 0;
    } else if (stepCount === 0) {
        memo[stepCount] = 1;
    } else {
        memo[stepCount] = tripleStepCount(stepCount-1) + tripleStepCount(stepCount-2) + tripleStepCount(stepCount-3);
    }
    return memo[stepCount];
}

console.log('20 steps', tripleStepCount(20) + ' combinations');
