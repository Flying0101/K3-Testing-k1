import '@testing-library/jest-dom';
import { render, screen, within, fireEvent } from '@testing-library/react';

import FuncOverview from '../../FuncOverview';


// check that click logic works and they render.
test('check that add project logic works.',() => {


    render(<FuncOverview />);

    // open modal
    const button =  screen.getByTestId('add-pro-btn');
    fireEvent.click(button);


    // write project name
    const changeInput = screen.getByTestId('project-input');

    fireEvent.change(changeInput, { target: { value: 'THIS IS AI WRITING' } })
    expect(changeInput.value).toBe('THIS IS AI WRITING');


    // write project color
    const colorInput = screen.getByTestId('color-input');

    fireEvent.change(colorInput, { target: { value: '#00FFFF' } })
    expect(colorInput.value).toBe('#00FFFF');


    // click on add btn in modal and send to db. 
    const AddBtn = screen.getByTestId('add-p-btn');
    expect(fireEvent.click(AddBtn)).toBe(true);


    





})  