export default function quickSelect(arr: number[], k: number): number {
    return quickSelectHelper(arr, 0, arr.length - 1, k - 1)
}

function quickSelectHelper(
    arr: number[],
    low: number,
    high: number,
    k: number
): number {
    if (low === high) {
        return arr[low]
    }

    let pivotIndex = getRandomIntInclusive(low, high)
    pivotIndex = partition(arr, low, high, pivotIndex)

    if (k === pivotIndex) {
        return arr[k]
    }
    if (k < pivotIndex) {
        return quickSelectHelper(arr, low, pivotIndex - 1, k)
    }
    return quickSelectHelper(arr, pivotIndex + 1, high, k)
}

function partition(
    arr: number[],
    low: number,
    high: number,
    pivotIndex: number
): number {
    const pivot = arr[pivotIndex]

    swap(arr, pivotIndex, high)

    pivotIndex = low

    for (let i = low; i < high; ++i) {
        if (arr[i] <= pivot) {
            swap(arr, i, pivotIndex)
            pivotIndex++
        }
    }

    swap(arr, pivotIndex, high)

    return pivotIndex
}

function swap(arr: unknown[], a: number, b: number): void {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}
