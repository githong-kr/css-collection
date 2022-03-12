import Link from 'next/link';
import { cls } from '@libs/utils';
import React, { useState } from 'react';

export default function LightBulbSwitch() {
  const [isClicked, setIsClicked] = useState<Boolean>(false);
  const onChange = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-[#333]">
        <label
          htmlFor="lightBulb"
          className="relative -top-[150px] h-20 w-40 rounded-[10px] bg-[#212121]"
        >
          <input
            onChange={onChange}
            className="peer appearance-none"
            id="lightBulb"
            type="checkbox"
          />
          <span className="absolute top-0 left-0 flex h-20 w-20 cursor-pointer items-center justify-center rounded-[14px] border-[6px] border-[#212121] bg-[#333] transition-all duration-500 peer-checked:left-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={cls(
                'h-10 w-10 text-white transition-all duration-500',
                isClicked ? 'drop-shadow-bulb' : 'text-opacity-50'
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </span>
          <div
            className={cls(
              'pointer-events-none absolute top-20 left-1/2 h-[408px] w-[348px] -translate-x-1/2 transition-all duration-500',
              isClicked
                ? "bg-[url('/images/LightBulbSwitch/bulb_on.jpg')]"
                : "bg-[url('/images/LightBulbSwitch/bulb_off.jpg')]"
            )}
          ></div>
        </label>
      </div>
    </>
  );
}
