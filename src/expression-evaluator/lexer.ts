export default function evaluateExpressionOk(exp: string): number {
    const tokens = tokenize(exp)
    return evaluate(tokens)
}

export type TokenKind = (typeof TOKEN_KIND)[keyof typeof TOKEN_KIND]
export const TOKEN_KIND = {
    Integer: 'Integer',
    LParen: '(',
    RParen: ')',
    Minus: '-',
    Plus: '+',
    Asterisk: '*',
    Slash: '/',
    Expotential: '^',
} as const

function isDigit(character: string): boolean {
    return /[0-9]/.test(character)
}

function isSymbol(character: string): boolean {
    return /[+\-/*()^]/.test(character)
}

function tokenize(input: string): string[] {
    let position = 0
    const tokens: string[] = []

    while (position < input.length) {
        const ch = input[position]

        if (isDigit(ch)) {
            let number = ''
            number += ch
            position++
            while (isDigit(input[position])) {
                number += input[position]
                position++
            }
            tokens.push(number)
            continue
        }

        if (isSymbol(ch)) {
            tokens.push(ch)
        }

        if (ch === ' ') {
            position++
            continue
        }
    }

    return tokens
}

function evaluate(rpn: string[]): number {
    const stack = new Stack()

    for (let i = 0; i < rpn.length; ++i) {
        const token = rpn[i]

        if (isSymbol(token)) {
            stack.push(evalOperation(token, stack))
            continue
        }

        stack.push(parseInt(token, 10))
    }
    return stack.pop() ?? 0
}

function evalOperation(operator: string, stack: Stack): number {
    const a = stack.pop() as number
    const b = stack.pop() as number

    switch (operator) {
        case TOKEN_KIND.Plus:
            return b + a
        case TOKEN_KIND.Minus:
            return b - a
        case TOKEN_KIND.Asterisk:
            return b * a
        case TOKEN_KIND.Slash:
            return b / a
        case TOKEN_KIND.Expotential:
            return b ^ a
        default:
            throw new Error(`Invalid operator: ${operator}`)
    }
}

class Stack {
    stack: number[] = []

    push(value: number): void {
        this.stack.push(value)
    }

    pop(): number | undefined {
        return this.stack.pop()
    }

    peek(): number | undefined {
        return this.stack[this.stack.length - 1]
    }
}
