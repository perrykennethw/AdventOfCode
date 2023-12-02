import { input } from './Part1Input';

function adventDayOnePartOne() {
    const digits: number[] = getDigitsFromString(input);
    return sumOfNumber(digits);
}

function getDigitsFromString(input: string[]) {
    return input.map(string => {
        const arrString: string[] = string.split('');
        let numberOne: number | undefined;
        let numberTwo: number | undefined;
        let secondIndex: number = arrString.length - 1;
        let numFromString: number;
        for (let i: number = 0; i < arrString.length; i++) {
            const currentNumber = getNumber(arrString[i]);
            const currentSecondNumber = getNumber(arrString[secondIndex - i]);
            if (currentNumber && numberOne == undefined) {
                numberOne = currentNumber;
            }

            if (currentSecondNumber && numberTwo == undefined) {
                numberTwo = currentSecondNumber;
            }

            if (numberOne != undefined && numberTwo != undefined) break;
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


adventDayOnePartOne();

