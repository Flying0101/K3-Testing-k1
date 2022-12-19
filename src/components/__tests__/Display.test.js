import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Display from '../Display';

test('check that div parent to map renders', () => {

    render(<Display />)
    const displayMapElement = screen.getByTestId('map-list-container');
    expect(displayMapElement).toBeInTheDocument();
})  