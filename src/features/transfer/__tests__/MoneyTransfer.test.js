import React from 'react';
import {render} from '@testing-library/react-native';
import {MoneyTransfer} from '../MoneyTransfer';

it('renders Money transfer screen with default values', () => {
  const {getAllByText} = render(<MoneyTransfer />);
  expect(getAllByText('Send Money').length).toBe(2);
});
