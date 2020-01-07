
import getRandomNumber from '../utils';
import flow from '..';

const task = 'What is the result of the expression?\n';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const getGameData = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${a} ${operator} ${b}`;
  const answer = `${calculate(a, b, operator)}`;

  return [question, answer];
};

export default () => flow(task, getGameData);
