export class Point {
    constructor(public x: number, public y: number) {}
}

class PathNode {
    constructor(public point: Point, public distance: number) {}
}

function comparePoints(a: Point, b: Point): boolean {
    return a.y === b.y && a.x === b.x
}

function createAndFill2DArray<T>(
    rows: number,
    cols: number,
    withValue: T
): T[][] {
    const array: T[][] = Array.from({ length: cols })

    for (let i = 0; i < cols; ++i) {
        array[i] = Array.from({ length: rows })
        for (let j = 0; j < rows; ++j) {
            array[i][j] = withValue
        }
    }

    return array
}

function changeValueIn2DArray<T>(arr: T[][], point: Point, value: T): boolean {
    if (arr[point.y][point.x]) {
        arr[point.y][point.x] = value
        return true
    } else {
        return false
    }
}

class Move {
    static left(point: Point, value: number): Point {
        return new Point(point.x - value, point.y)
    }
    static right(point: Point, value: number): Point {
        return new Point(point.x + value, point.y)
    }
    static up(point: Point, value: number): Point {
        return new Point(point.x, point.y - value)
    }
    static down(point: Point, value: number): Point {
        return new Point(point.x, point.y + value)
    }
}

function isPointValid(
    point: Point,
    visited: boolean[][],
    maze: number[][]
): boolean {
    return (
        point.x >= 0 &&
        point.x < maze.length &&
        point.y >= 0 &&
        maze[0].length !== 0 &&
        maze[point.x][point.y] === 1 &&
        !visited[point.x][point.y]
    )
}

export default function findShortestPathInMaze(
    maze: number[][],
    source: Point,
    destination: Point
): number | undefined {
    const queue = new Queue<PathNode>()
    const visited = createAndFill2DArray(maze.length, maze[0].length, false)
    changeValueIn2DArray(visited, source, true)
    let minDistance: number

    while (!queue.isEmpty()) {
        const pathNode = queue.dequeue() as PathNode

        if ()
    }
}

class UniNode<T> {
    next: UniNode<T> | null = null
    constructor(public value: T) {}
}

class Queue<T> {
    private head: UniNode<T> | null = null
    private tail: UniNode<T> | null = null
    private _size: number = 0

    enqueue(value: T): void {
        const newNode = new UniNode(value)

        if (!this.tail) {
            this.tail = this.head = newNode
            return
        }

        this.tail.next = newNode
        this.tail = newNode
    }

    dequeue(): T | undefined {
        if (!this.head) {
            return undefined
        }

        const value = this.head.value

        if (this.head === this.tail) {
            this.clear
        }

        this.head = this.head.next

        return value
    }

    clear(): void {
        this.head = this.tail = null
    }

    get size(): number {
        return this._size
    }

    isEmpty(): boolean {
        return this._size === 0
    }
}
