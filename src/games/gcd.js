
import getRandomNumber from '../utils';
import flow from '..';

const task = 'Find the greatest common divisor of given numbers.\n';

const gcd = (x, y) => (x ? gcd(y % x, x) : y);

const getGameData = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();

  const question = `${a} ${b}`;
  const answer = `${gcd(a, b)}`;

  return [question, answer];
};

export default () => flow(task, getGameData);
