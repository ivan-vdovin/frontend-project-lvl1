import getRandomNumber from '../utils';
import flow from '..';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getGameData = () => {
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => flow(task, getGameData);
