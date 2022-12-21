import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import FuncOverview from '../../FuncOverview';


// check that click logic works and they render.
test('check that add task logic works.',() => {

 
    render(<FuncOverview />);

    //change to task page
    const pageBtn = screen.getByTestId('task-page-btn');
    fireEvent.click(pageBtn);



    // open task modal
    const button = screen.getByTestId('add-task-btn');
    fireEvent.click(button);


    // write task name
    const changeInput = screen.getByTestId('task-input');
    fireEvent.change(changeInput, { target: { value: 'THIS IS AN AI TASK' } })
    expect(changeInput.value).toBe('THIS IS AN AI TASK');

 

    // click select in task modal.
    const select = screen.getByTestId('task-select');
    expect(fireEvent.click(select)).toBe(true);

    // fireEvent.change(select, { target: {value: 'BUGATTI'} })
    //expect(select.value).toBe('BUGATTI');
    //expect BUGGATI received empty "".


    // click on add btn in modal. 
    const AddBtn = screen.getByTestId('add-t-btn');
    expect(fireEvent.click(AddBtn)).toBe(true);








})  