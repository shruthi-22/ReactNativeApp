import React from 'react';
import {render} from '@testing-library/react-native';
import {MoneyTransfer} from '../MoneyTransfer';

test('renders Money transfer screen with default values', () => {
  render(<MoneyTransfer />);
  expect(getAllByText('Send Money').length).toBe(2);
});
