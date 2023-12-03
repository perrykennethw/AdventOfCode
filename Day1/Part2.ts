import { input } from './Part1Input';

interface numberWordMapInterface {
    [key: string]: RegExp
}

const numberWordMap: numberWordMapInterface = {
    '1': /one/gi,
    '2': /two/gi,
    '3': /three/gi,
    '4': /four/gi,
    '5': /five/gi,
    '6': /six/gi,
    '7': /seven/gi,
    '8': /eight/gi,
    '9': /nine/gi
};

function adventDayOnePartTwo() {
    const digits: number[] = getDigitsFromString(input, numberWordMap);
    return sumOfNumber(digits);
}

function getDigitsFromString(input: string[], numberWordMap: numberWordMapInterface) {
    return input.map(string => {
        const newStr: string = replaceWordWithNum(string, numberWordMap);
        const arrString: string[] = newStr.split('');
        const secondIndex: number = arrString.length - 1;
        let numberOne: number | undefined;
        let numberTwo: number | undefined;
        let numFromString: number;
        for (let i: number = 0; i < arrString.length; i++) {
            const currentNumber = getNumber(arrString[i]);
            const currentSecondNumber = getNumber(arrString[secondIndex - i]);
            if (
                currentNumber && numberOne == undefined
            ) {
                numberOne = Number(arrString[i]);
            }

            if (
                currentSecondNumber && numberOne == undefined
            ) {
                numberTwo = Number(arrString[secondIndex - i]);
            }
        }

        if (numberOne == undefined && numberTwo) {
            numberOne = numberTwo;
        } else if  (numberTwo == undefined && numberOne) {
            numberTwo = numberOne;
        }


        return numFromString = Number(`${numberOne}${numberTwo}`);
    });
}

function getNumber(string: string) {
    const num = (/^\d+$/.test(string) && string.charAt(0) !== '0') ? Number(string) : false;
    return num;
}

function sumOfNumber(numbers: number[]) {
    return numbers.reduce((prev: number, curr: number) => prev + curr);
}

function replaceWordWithNum(string: string, numberWordMap: numberWordMapInterface) {
    let temp: string | undefined;
    for (const [key, value] of Object.entries(numberWordMap)) {
        temp = (temp != undefined) ? temp : string;
        if (temp.match(value)) {
            let tempArr: string[] = temp.split('');
            tempArr.splice(temp.search(value), 0, key);
            temp = tempArr.join('');
        }
    }

    return temp || string;
}

console.log(adventDayOnePartTwo());