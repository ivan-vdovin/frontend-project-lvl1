
import getRandomNumber from '../utils';
import flow from '..';

const task = 'What number is missing in the progression?\n';

const progLength = 10;

const getProgression = (a1, p, length) => {
  const progression = [a1];

  for (let i = 1; i < length; i += 1) {
    progression.push(progression[i - 1] + p);
  }
  return progression;
};

const getGameData = () => {
  const a1 = getRandomNumber(1, 10);
  const p = getRandomNumber(1, 10);
  const missedElemIndex = getRandomNumber(1, progLength - 1);
  const progression = getProgression(a1, p, progLength);

  const missedElem = progression.splice(missedElemIndex, 1, '..');

  const question = progression.join(' ');
  const answer = `${missedElem}`;

  return [question, answer];
};

export default () => flow(task, getGameData);
