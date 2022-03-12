import { cls } from '@libs/utils';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function Calculator() {
  const [operation, setOperation] = useState<string>('');

  const isOperator = (letter: string): boolean => {
    if (Number.isInteger(+letter) || letter.includes('.')) {
      return false;
    } else {
      return true;
    }
  };

  const getLastNumber = (value: string): string => {
    const splitValue = value.split(/[^0-9^.]+/);
    return splitValue[splitValue.length - 1];
  };

  const isIncludeDotLetterInLastNumber = (value: string): boolean => {
    const lastNumber = getLastNumber(value);
    return lastNumber.includes('.');
  };

  const isLastNumberEmpty = (value: string): boolean => {
    const lastNumber = getLastNumber(value);
    if (lastNumber === '') {
      return true;
    } else {
      return false;
    }
  };

  const isDotAsLastLetter = (value: string): boolean => {
    return value[value.length - 1] === '.';
  };

  const isImpossibleLetterAsFirtLetter = (letter: string): boolean => {
    return isOperator(letter) || letter === '.' || letter === '00';
  };

  const isZeroAsFirstLetter = (value: string): boolean => {
    const lastNumber = getLastNumber(value);
    if (lastNumber === '0') {
      return true;
    } else {
      return false;
    }
  };

  const buttonValueList = [
    'C',
    '/',
    '*',
    '7',
    '8',
    '9',
    '-',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '0',
    '00',
    '.',
    '=',
  ];

  const onClickButton = (e: React.UIEvent<HTMLSpanElement>) => {
    const letter = e.currentTarget.innerText;

    if (letter === 'C') {
      setOperation('');
      return;
    }

    if (letter === '=') {
      setOperation(eval(operation).toString());
      return;
    }

    if (isLastNumberEmpty(operation)) {
      if (isImpossibleLetterAsFirtLetter(letter)) {
        return;
      }
    }

    if (isZeroAsFirstLetter(operation)) {
      if (!isOperator(letter) && letter !== '.') {
        return;
      }
    }

    if (isIncludeDotLetterInLastNumber(operation)) {
      if (letter === '.') {
        return;
      }
    }

    if (isDotAsLastLetter(operation)) {
      if (isOperator(letter)) {
        return;
      }
    }

    setOperation((prev) => prev + letter);
  };

  return (
    <>
      <div className="flex min-h-screen min-w-full items-center justify-center bg-[#333]">
        <div className="relative min-h-[400px] min-w-[300px] rounded-[20px] bg-[#333] px-[30px] py-[40px] pt-[30px] shadow-calc">
          <form className="relative grid ">
            <span className="relative cursor-pointer left-[10px] col-span-4 mb-[10px] grid h-[100px] w-[calc(100%-20px)] select-all items-center rounded-[10px] bg-[#a7af7c] p-[10px] text-right text-[2em] shadow-[0_0px_0px_2px_rgba(0,0,0,0.75)]">
              {operation}
            </span>
            {buttonValueList.map((buttonValue: string, index: number) => (
              <span
                className={cls(
                  'relative m-[8px] grid h-[80px] w-[80px] cursor-pointer select-none place-items-center rounded-[10px]  font-[400] text-white shadow-calc_num',
                  'before:absolute before:top-[3px] before:left-[4px] before:bottom-[14px] before:right-[12px] before:rounded-[10px]  before:shadow-calc_num_before',
                  'active:brightness-[1.5]',
                  buttonValue === 'C'
                    ? 'col-span-2 w-[180px] bg-[#f00] before:border-l-[1px] before:border-t-[1px] before:border-b-[1px] before:border-l-[#fff4] before:border-t-[#fff4] before:border-b-[#fff4] before:bg-gradient-to-r before:from-[#d20000] before:to-[#ffffff5c]'
                    : '',
                  buttonValue === '+' ? 'row-span-2 h-[180px]' : '',
                  buttonValue === '='
                    ? 'bg-[#2196f3] before:border-l-[1px] before:border-t-[1px] before:border-b-[1px] before:border-l-[#fff4] before:border-t-[#fff4] before:border-b-[#fff4] before:bg-gradient-to-r before:from-[#1479c9] before:to-[#ffffff5c]'
                    : '',
                  buttonValue !== 'C' && buttonValue !== '='
                    ? 'bg-gradient-to-l from-[#2f2f2f]  to-[#3f3f3f] before:border-l-[1px] before:border-t-[1px] before:border-b-[1px] before:border-l-[#0004] before:border-t-[#0009] before:border-b-[#0004] before:bg-gradient-to-r before:from-[#2d2d2d] before:to-[#4d4d4d]'
                    : ''
                )}
                key={index}
                onClick={onClickButton}
              >
                <i className="relative text-[1.5em] font-normal uppercase">
                  {buttonValue}
                </i>
              </span>
            ))}
          </form>
        </div>
      </div>
    </>
  );
}
