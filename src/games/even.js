
import getRandomNumber from '../utils';
import flow from '..';

const task = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const question = getRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => flow(task, getGameData);
