import getCombinationSum from '../src/combination-sum'
import evaluateExpression from '../src/evaluate-expression'
import findAllFrequenciesInSortedArray from '../src/find-all-frequencies-in-sorted-array'
import getLongestSubstringNoRepeatingChars from '../src/longest-substring-no-repeating-chars'
import quickSelect from '../src/quickSelect'
import getTopElements from '../src/top-k-elements'

describe('longest no repeating substring', () => {
    const cases: [string, number][] = [
        ['aabbcd', 3],
        ['aa', 1],
        ['abcd', 4],
    ]

    test.each(cases)("given '%p', returns %p", (input, expected) => {
        expect(getLongestSubstringNoRepeatingChars(input)).toBe(expected)
    })
})

describe('top k elements', () => {
    const cases: [number[], number, number[]][] = [
        [[1, 2, 3, 4], 2, [3, 4]],
        [[1, 2], 2, [1, 2]],
        [[-1, 3], 4, [-1, 3]],
        [[0], 4, [0]],
        [[], 2, []],
        [[1, 2, 3], 0, []],
    ]

    test.each(cases)(
        'given array of numbers %p and elements %p, returns %p',
        (arr, elements, expected) => {
            expect(getTopElements(arr, elements)).toEqual(expected)
        }
    )
})

describe('combination sum', () => {
    const cases: [number[], number, number[][]][] = [
        [[2, 3, 6, 7], 7, [[2, 2, 3], [7]]],
        [
            [2, 3, 5],
            8,
            [
                [2, 2, 2, 2],
                [2, 3, 3],
                [3, 5],
            ],
        ],
    ]

    test.each(cases)(
        'given candidates %p and target %p, returns %p',
        (candidates, target, expected) => {
            const combinations = getCombinationSum(candidates, target)
            combinations.forEach((c, ind) => {
                expect(c).toEqual(expected[ind])
            })
        }
    )
})

describe('quick select', () => {
    const cases: [number[], number, number][] = [
        [[4, 2, 1, 9], 2, 2],
        [[1, 0, -1], 1, -1],
    ]

    test.each(cases)(
        'given numbers %p and k %p, returns %p',
        (input, k, expected) => {
            expect(quickSelect(input, k)).toBe(expected)
        }
    )
})

describe('find all frequencies in a sorted array', () => {
    const cases: [number[], Map<number, number>][] = [
        [
            [2, 2, 2, 4, 4, 4, 5, 5, 6, 8, 8, 9],
            new Map([
                [2, 3],
                [4, 3],
                [5, 2],
                [6, 1],
                [8, 2],
                [9, 1],
            ]),
        ],
    ]

    test.each(cases)('given sorted array %p, returns %p', (input, expected) => {
        const result = findAllFrequenciesInSortedArray(input)

        for (const [value, freq] of result) {
            expect(expected.get(value)).toBe(freq)
        }
    })
})

describe('evaluate expresson', () => {
    const cases: [string, number][] = [['-10+(5+(12+8)-2)+1', 14]]

    test.each(cases)('given expression %p, returns %p', (input, expected) => {
        expect(evaluateExpression(input)).toBe(expected)
    })
})
