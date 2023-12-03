import { gameData } from './Part1Input';

interface ColorCounts {
    blue?: number;
    red?: number;
    green?: number;
}

interface GameData {
    [key: number]: ColorCounts[];
}

interface WinPosibility {
    blue: number;
    red: number;
    green: number;
}


function adventDayTwoPartOne(input: string[]) {
    const gameData: GameData = formatGameData(input);
    // const winPosibility: WinPosibility = setWinPosibility();

    console.log(gameData);
}

function setWinPosibility() {
    const winPosibility: WinPosibility = {
        blue: 14,
        red: 12,
        green: 13
    };
    return winPosibility;
}

function formatGameData(input: string[]) {
     return input.map((line) => {
        const parts: string[] = line.split(": ");
        const gameNumber: number = parseInt(parts[0].split(" ")[1]);
        const colorCounts: ColorCounts[] = [];
        
        parts[1].split(";").forEach((segment) => {
            const counts: ColorCounts = {};
            segment.split(",").forEach((item) => {
                const [count, color]: string[] = item.trim().split(" ");
                counts[color] = Number(count);
            });
            colorCounts.push(counts);
        });
    
        return this[gameNumber] = colorCounts;
    });
}

console.log(adventDayTwoPartOne(gameData));
