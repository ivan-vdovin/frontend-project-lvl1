
import getRandomNumber from '../utils';
import flow from '..';

const task = 'What number is missing in the progression?\n';

const getProgression = (n) => {
  const a1 = getRandomNumber(1, 10);
  const p = getRandomNumber(1, 10);
  const arr = [a1];

  for (let i = 1; i < n; i += 1) {
    arr.push(arr[i - 1] + p);
  }
  return arr;
};

const getMissedNumProgression = () => {
  const progression = getProgression(10);
  const i = getRandomNumber(0, 9);

  const missedNum = progression[i];
  progression[i] = '..';

  return [progression.join(' '), missedNum];
};

const getGameData = () => {
  const [progression, missedNum] = getMissedNumProgression();

  const question = `${progression}`;
  const answer = `${missedNum}`;

  return [question, answer];
};

export default () => flow(task, getGameData);
