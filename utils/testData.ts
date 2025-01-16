export class TestData {

    //@returns String of random numbers
    static getRandomNumbers(count: number, min: number, max: number): string {
        return Array.from({length: count}, () =>
        Math.floor(Math.random() * (min - max + 1 )) + min).join('')
    }

    static getRandomLetters(count: number, isUpperCase = false): string {
        return Array.from({length: count }, () => {
            const charCode = Math.floor(Math.random() * 26) + 97 // range from a to z 
            return isUpperCase ? String.fromCharCode(charCode).toUpperCase() :
            String.fromCharCode(charCode);
        }).join('')
    }
}