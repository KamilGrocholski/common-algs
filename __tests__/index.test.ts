import getCombinationSum from '../src/combination-sum'
import getLongestSubstringNoRepeatingChars from '../src/longest-substring-no-repeating-chars'
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
        'given array of numbers %p, elements %p and type %p, returns %p',
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
