export const shuffle = <T>(arr: T[]) => {
    let j = arr.length;
    while (j) {
        const i = Math.floor(Math.random() * j--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
}


export const getNoun = (number: number, nounForms: readonly [string, string, string]) => {
    const lastTwoDigits = Math.abs(number) % 100
    const lastDigit = lastTwoDigits % 10

    const result = `${number} `

    if (lastTwoDigits > 10 && lastTwoDigits < 20) { return result.concat(nounForms[2]) }
    if (lastDigit > 1 && lastDigit < 5) { return result.concat(nounForms[1]) }
    if (lastDigit === 1) { return result.concat(nounForms[0]) }

    return result.concat(nounForms[2])
}
