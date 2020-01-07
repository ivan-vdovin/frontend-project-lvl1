import readlineSync from 'readline-sync';

const levelsCount = 3;

export default (task, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

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

    console.log('Correct!\n');
    iter(counter + 1);
  };

  iter(1);
};
