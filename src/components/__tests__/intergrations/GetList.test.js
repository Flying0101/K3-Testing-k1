import '@testing-library/jest-dom';

import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';

import Display from '../../Display';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../../../contexts/ProjectContext';

test('check if render and check length.', async () => {

    render(
        <BrowserRouter>
            <Projects>
                <Display />
            </Projects>
        </BrowserRouter>)


    // check that container for map exist
    const ListContainer = screen.getByTestId('map-list-container');
    expect(ListContainer).toBeInTheDocument();


    // check to find tasks.
    within('map-list-container');
    const TaskList = await screen.findAllByTestId('timer-task');
    expect(TaskList.length).toBe(8);
    screen.debug();
})  