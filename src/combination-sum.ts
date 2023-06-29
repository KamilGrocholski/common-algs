// BACKTRACKING

export default function getCombinationSum(
    candidates: number[],
    target: number
): number[][] {
    const output: number[][] = []

    const logs: string[] = []
    getCombinationSumHelper([], 0, 0, output, candidates, target, logs)
    // console.log(logs)
    return output
}
function getCombinationSumHelper(
    combination: number[] = [],
    sum = 0,
    index = 0,
    output: number[][],
    candidates: number[],
    target: number,
    logs: string[]
) {
    if (sum > target) {
        logs.push(`sum > target: ${sum} > ${target}`)
        return
    }
    if (sum === target) {
        logs.push(`sum === target: ${sum} === ${target}`)
        output.push(combination)
        return
    }

    logs.push(
        `current valid state: index: ${index}, sum: ${sum}, combination: ${combination}`
    )

    for (let i = index; i < candidates.length; ++i) {
        logs.push(
            `index: ${i}, candidate: ${candidates[i]}, sum: ${
                sum + candidates[i]
            }`
        )
        getCombinationSumHelper(
            [...combination, candidates[i]],
            sum + candidates[i],
            i,
            output,
            candidates,
            target,
            logs
        )
    }
}
