export default function getTopElements(
    arr: number[],
    elements: number
): number[] {
    const heapS = new MinHeap()

    const maxFirst = elements > arr.length ? arr.length : elements

    for (let i = 0; i < maxFirst; ++i) {
        heapS.push(arr[i])
    }

    for (let i = arr.length - maxFirst; i < arr.length; ++i) {
        heapS.pop()
        heapS.push(arr[i])
    }

    return heapS.heap
}

class MinHeap {
    heap: number[]
    length: number

    constructor() {
        this.heap = []
        this.length = 0
    }

    push(value: number): void {
        this.heap.push(value)
        this.length++
        this.heapifyUp(this.length - 1)
    }

    pop(): number | undefined {
        if (this.length === 0) {
            return undefined
        }

        const removed = this.heap[0]
        this.length--

        if (this.length === 0) {
            this.heap = []
            return removed
        }

        this.heap[0] = this.heap.pop() as number
        this.heapifyDown(0)

        return removed
    }

    private heapifyUp(index: number): void {
        if (index === 0) {
            return
        }

        const parentIndex = this.getParentIndex(index)
        const parentValue = this.heap[parentIndex]
        const childValue = this.heap[index]

        if (parentValue > childValue) {
            swap(this.heap, parentIndex, index)
            this.heapifyUp(parentIndex)
        }
    }

    private heapifyDown(index: number): void {
        const leftChildIndex = this.getLeftChild(index)
        const rightChildIndex = this.getRightChild(index)

        if (index >= this.length || rightChildIndex >= this.length) {
            return
        }

        const leftChildValue = this.heap[leftChildIndex]
        const rightChildValue = this.heap[rightChildIndex]
        const parentValue = this.heap[index]

        if (leftChildValue > rightChildValue && parentValue > rightChildValue) {
            swap(this.heap, rightChildIndex, index)
            this.heapifyDown(rightChildIndex)
        } else if (
            leftChildValue < rightChildValue &&
            parentValue > leftChildValue
        ) {
            swap(this.heap, leftChildIndex, index)
            this.heapifyDown(leftChildIndex)
        }
    }

    private getLeftChild(parentIndex: number): number {
        return parentIndex * 2 + 1
    }

    private getRightChild(parentIndex: number): number {
        return parentIndex * 2 + 2
    }

    private getParentIndex(childIndex: number): number {
        return Math.floor(childIndex / 2 + 1)
    }
}

function swap(arr: any[], l: number, r: number): void {
    const temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
}
