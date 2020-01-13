import getRandomNumber from '../utils';
import flow from '..';

const task = 'What number is missing in the progression?';
const progressionLength = 10;

const getProgression = (start, diff, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + diff * i);
  }
  return progression;
};

const getGameData = () => {
  const start = getRandomNumber(1, 10);
  const diff = getRandomNumber(1, 10);
  const missedElemIndex = getRandomNumber(1, progressionLength - 1);
  const progression = getProgression(start, diff, progressionLength);

  const missedElem = progression.splice(missedElemIndex, 1, '..');

  const question = progression.join(' ');
  const answer = `${missedElem}`;

  return [question, answer];
};

export default () => flow(task, getGameData);
