// almost like the binary search
export default function findAllFrequenciesInSortedArray(
    arr: number[]
): Map<number, number> {
    const frequencies: Map<number, number> = new Map()

    let low = 0
    let high = arr.length - 1

    while (low <= high) {
        if (arr[low] === arr[high]) {
            const freq = frequencies.get(arr[low])
            const freqSum = high - low + 1

            if (freq !== undefined) {
                frequencies.set(arr[low], freq + freqSum)
                low = high + 1
                high = arr.length - 1
            } else {
                frequencies.set(arr[low], 0)
            }
        } else {
            high = Math.floor((low + high) / 2)
        }
    }

    return frequencies
}
