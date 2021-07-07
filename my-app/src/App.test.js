import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent} from '@testing-library/react'
import { getByTestId } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'



it('renders without crashing', () => {
  const div = document.createElement('div');

  const { getByText, getByTestId } = render(<App />, div);
  expect(getByText('Scoreboard')).toHaveTextContent('Scoreboard')
  expect(getByTestId('card')).toHaveClass('red')
  ReactDOM.unmountComponentAtNode(div);
});

it('check card functioning', () => {
  const div = document.createElement('div');
  const { getByText, getByTestId } = render(<App />, div);

  fireEvent.click(getByText('Strike'));
  expect(getByText('Strikes: 1')).toHaveTextContent('Strikes: 1')


  fireEvent.click(getByText('Ball'));
  expect(getByText('Balls: 1')).toHaveTextContent('Balls: 1')


  fireEvent.click(getByText('Hit'));
  expect(getByText('Balls: 0')).toHaveTextContent('Balls: 0')












});
