import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import OverviewHeader from '../OverviewHeader';

test('render the Overview paragraph in Overview page', () => {

    render(<OverviewHeader />)
    const OverviewElement = screen.getByTestId('overview-header');
    expect(OverviewElement).toBeInTheDocument();

 
})  