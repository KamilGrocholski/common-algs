export default function getLongestSubstringNoRepeatingChars(
    input: string
): number {
    let low = 0
    let high = 0

    let largest: null | number = null

    const lookup = new Set<string>()

    lookup.add(input[low])

    while (high < input.length) {
        high++

        const ch = input[high]

        if (lookup.has(ch)) {
            lookup.delete(ch)

            const diff = high - low

            if (largest === null || diff > largest) {
                largest = diff
            }

            while (input[low] !== ch) {
                low++
            }
        } else {
            lookup.add(ch)
        }
    }

    if (largest === null) {
        return high - low
    }

    return largest
}
