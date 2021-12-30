"use strict";

let generatedNumbers;
let attemptsCount;

resetGame();

startGame();

function resetGame() {
    attemptsCount = 0;
    generatedNumbers = [];

    while (generatedNumbers.length < 4) {
        const part = Math.floor(Math.random() * 10);
        if (!generatedNumbers.includes(part)) {
            generatedNumbers.push(part);
        }
    }
}

function startGame() {
    while (true) {
        const guess = prompt ('Попробуйте отгадать четырехзначное целое положительное число.\n' + 
        'Для выхода из игры введите "-1"');
        if (guess === '-1') {
            return alert('Спасибо за игру! До свидания!')
        }

        if (!isValidGuess(guess)) {
            alert('Необходимо ввести четырехзначное положительное число');
            continue;
        }

        attemptsCount++;

        const result = getGuessResult(guess);
        
        if (result[0] !== 4) {
            alert(`Быки: ${result[0]}. Коровы: ${result[1]}`);
            continue;
        }
        
        alert(`Поздравляем! Вы угадали все числа с ${attemptsCount} попытки!`);

        if (!confirm('Хотите еще сыграть?')) {
            return alert('Спасибо за игру! До свидания!');
        }
        
        resetGame();
    }
}

function isValidGuess(guess) {
    if (guess.length !== 4) {
        return false;
    }

    for (let i = 0; i < guess.length; i++) {
        if (Number.isNaN(parseInt(guess[i]))) {
            return false;
        }
    }

    return true;
}

function getGuessResult(guess) {
    const result = [0, 0];

    for (let i = 0; i < guess.length; i++) {
        const guessNumber = +guess[i];
        if (generatedNumbers[i] === guessNumber) {
            result[0]++;
        } else if (generatedNumbers.includes(guessNumber)) {
            result[1]++;
        }
    }
    return result;
}