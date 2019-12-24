
import readlineSync from 'readline-sync';
import getRandomNumber from '../utils';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const levelsCount = 3;

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!\n`);

const runGame = () => {
  const iter = (counter) => {
    if (counter > levelsCount) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }

    const [question, answer] = getGameData();
    console.log(`Question: ${question}`);
    const actual = readlineSync.question('Your answer: ');

    if (actual !== answer) {
      console.log(`'${actual}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
    iter(counter + 1);
  };

  iter(1);
};

export default runGame;
