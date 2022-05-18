import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add one number to another', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const plusButton = container.getByTestId('add');
    const equalButton = container.getByTestId('equals');
    
    const runningTotal = container.getByTestId('running-total');
    
    fireEvent.click(button1);
    fireEvent.click(plusButton);
    fireEvent.click(button4);
    fireEvent.click(equalButton);

    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract one number from another', () => {
  const button7 = container.getByTestId('number7');
  const button4 = container.getByTestId('number4');
  const minusButton = container.getByTestId('subtract');
  const equalButton = container.getByTestId('equals');
  const runningTotal = container.getByTestId('running-total');
  
  fireEvent.click(button7);
  fireEvent.click(minusButton);
  fireEvent.click(button4);
  fireEvent.click(equalButton);

  expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply one number by another', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiButton = container.getByTestId('multi');
    const equalButton = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    
    fireEvent.click(button3);
    fireEvent.click(multiButton);
    fireEvent.click(button5);
    fireEvent.click(equalButton);
  
    expect(runningTotal.textContent).toEqual('15');
    })

    it('should divide one number by another', () => {
      const button1 = container.getByTestId('number1');
      const button2 = container.getByTestId('number2');
      const button7 = container.getByTestId('number7');
      const divideButton = container.getByTestId('divide');
      const equalButton = container.getByTestId('equals');
      const runningTotal = container.getByTestId('running-total');
      
      fireEvent.click(button2);
      fireEvent.click(button1);
      fireEvent.click(divideButton);
      fireEvent.click(button7);
      fireEvent.click(equalButton);
    
      expect(runningTotal.textContent).toEqual('3');
      })

      it('should concatinate mutiple number button clicks', () => {
        const button1 = container.getByTestId('number1');
        const button2 = container.getByTestId('number2');
        const button7 = container.getByTestId('number7');
        const runningTotal = container.getByTestId('running-total');

        fireEvent.click(button1);
        fireEvent.click(button2);
        fireEvent.click(button7);

        expect(runningTotal.textContent).toEqual('127');
      })

      it('should chain mutiple calculations together', () => {
        const button1 = container.getByTestId('number1');
        const button2 = container.getByTestId('number2');
        const button7 = container.getByTestId('number7');
        const multiButton = container.getByTestId('multi');
        const plusButton = container.getByTestId('add');
        const equalButton = container.getByTestId('equals');

        const runningTotal = container.getByTestId('running-total');

        fireEvent.click(button7);
        fireEvent.click(multiButton);
        fireEvent.click(button2);
        fireEvent.click(plusButton);
        fireEvent.click(button1);
        fireEvent.click(equalButton);

        expect(runningTotal.textContent).toEqual('15');
      })

      it('should chain mutiple calculations together', () => {
        const button1 = container.getByTestId('number1');
        const button2 = container.getByTestId('number2');
        const button7 = container.getByTestId('number7');
        const multiButton = container.getByTestId('multi');
        const plusButton = container.getByTestId('add');
        const clearButton = container.getByTestId('clear');

        const equalButton = container.getByTestId('equals');

        const runningTotal = container.getByTestId('running-total');

        fireEvent.click(button7);
        fireEvent.click(multiButton);
        fireEvent.click(button2);
        fireEvent.click(equalButton);
        fireEvent.click(plusButton);
        fireEvent.click(button1);
        fireEvent.click(clearButton);
        fireEvent.click(equalButton);

        expect(runningTotal.textContent).toEqual('14');
      })

})

