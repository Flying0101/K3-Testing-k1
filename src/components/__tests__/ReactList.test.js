import '@testing-library/jest-dom';
import { render, screen, within } from '@testing-library/react';

import ReactList from '../ReactList';

test('check if react list renders with map method', () => {

    render(<ReactList />)
    const ListContainer = screen.getByRole('list');
  
    const { getAllByRole } = within(ListContainer)
    const items = getAllByRole("listitem")
    expect(items.length).toBe(3) 
   
})  