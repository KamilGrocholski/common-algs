type Signs = (typeof SIGNS)[keyof typeof SIGNS]
const SIGNS = {
    Plus: 1,
    Minus: -1,
} as const

export default function evaluateExpression(exp: string): number {
    let result = 0

    let current = 0

    let sign: Signs = SIGNS.Plus

    const stack = new Stack()
    stack.push(SIGNS.Plus)

    for (const char of exp) {
        if (isNumber(char)) {
            current = current * 10 + parseInt(char, 10)
        } else if (char === '+') {
            result += sign * current
            current = 0
            sign = stack.peek() as Signs
        } else if (char === '-') {
            result += sign * current
            current = 0
            sign = ((stack.peek() as Signs) * -1) as Signs
        } else if (char === '*') {
            result *= sign * current
            current = 0
            sign = stack.peek() as Signs
        } else if (char === '/') {
            result /= sign * current
            current = 0
            sign = stack.peek() as Signs
        } else if (char === '(') {
            stack.push(sign)
        } else if (char === ')') {
            stack.pop()
        }
    }

    result += sign * current

    return result
}

const _0 = '0'.charCodeAt(0)
const _9 = '9'.charCodeAt(0)

function isNumber(character: string): boolean {
    const char = character.charCodeAt(0)
    return char >= _0 && char <= _9
}

class UniNode {
    next: UniNode | null = null
    constructor(public value: number) {}
}
class Stack {
    private head: UniNode | null = null
    private tail: UniNode | null = null

    push(value: number): void {
        const newNode = new UniNode(value)

        if (!this.head) {
            this.tail = this.head = newNode
            return
        }

        newNode.next = this.head
        this.head = newNode
    }

    pop(): number | undefined {
        if (!this.head) {
            return undefined
        }

        const value = this.head?.value

        this.head = this.head.next

        return value
    }

    peek(): number | undefined {
        return this.head?.value
    }
}
