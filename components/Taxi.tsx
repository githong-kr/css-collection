import Link from 'next/link';
import { cls } from '@libs/utils';
import React, { useState } from 'react';

export default function Taxi() {
  return (
    <>
      <div className="fixed flex h-screen w-screen items-center justify-center bg-[#ededed]">
        {/* road */}
        <div
          className={cls(
            'relative flex h-28 w-96 items-center justify-center rounded-[75px] bg-[#333] perspective transform-style',
            'before:absolute before:h-[4px] before:w-full before:animate-[roadPass_.125s_linear_infinite] before:bg-gradient-to-r before:from-[white_0%_50%] before:to-[transparent_50%_100%] before:bg-[length:50px]'
          )}
        >
          {/* taxi */}
          <div
            className={cls(
              'shadow-[-10px_10px_rgba(0,0,0,0.25) ] absolute left-12 h-[50px] w-[120px] animate-[drunkenTaxi_2s_linear_infinite] rounded-[10px] bg-[#f4b603] perspective transform-style',
              'before:absolute before:top-[8px] before:left-[2px] before:h-[9px] before:w-[3px] before:bg-[#fc3c25] before:shadow-[0_25px_#fc3c25]',
              'after:absolute after:top-[8px] after:right-[4px] after:h-[10px] after:w-[4px] after:bg-white after:shadow-[0_26px_white]'
            )}
          >
            {/* light beam */}
            <div
              className={cls(
                'absolute top-[0px] right-[-2px] h-[50px] w-[10px] rounded-[15px] bg-[#0002] transform-style',
                'before:absolute before:top-[8px] before:h-[10px] before:w-[150px] before:origin-left before:bg-gradient-to-r before:from-[#fff6] before:rotate-perspective',
                'after:absolute after:bottom-[8px] after:h-[10px] after:w-[150px] after:origin-left after:bg-gradient-to-r after:from-[#fff6] after:rotate-perspective'
              )}
            ></div>
            <span
              className={cls(
                'absolute inset-x-[8px] inset-y-[3px] rounded-[10px] bg-[#fdd206]',
                'before:absolute before:top-1/2 before:left-1/2 before:z-10 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-90 before:rounded-[2px] before:bg-white before:p-[2px] before:text-[1px] before:uppercase before:shadow-[0_0_0_1px_#0005] before:content-["Taxi"]'
              )}
            >
              <b
                className={cls(
                  'absolute inset-x-[10px] inset-y-[0px] rounded-[10px] bg-[#111]',
                  'before:absolute before:inset-x-[15px] before:inset-y-[4px] before:rounded-[5px] before:bg-[#fdd206]',
                  'after:absolute after:inset-x-[40px] after:inset-y-[0px] after:rounded-[5px] after:bg-[#fdd206]'
                )}
              ></b>
              <i
                className={cls(
                  'absolute inset-0',
                  'before:absolute before:top-[5px] before:left-[3px] before:h-[3px] before:w-[25px] before:origin-right before:rotate-[15deg] before:bg-[#fdd206] before:shadow-[75px_18px_#fdd206]',
                  'after:absolute after:bottom-[5px] after:left-[3px] after:h-[3px] after:w-[25px] after:origin-right after:rotate-[-15deg] after:bg-[#fdd206] after:shadow-[75px_-18px_#fdd206]'
                )}
              ></i>
            </span>
          </div>
          {/* taxi */}
          <div
            className={cls(
              'shadow-[-10px_10px_rgba(0,0,0,0.25) ] absolute right-12 h-[50px] w-[120px] animate-[drunkenTaxi_4s_linear_infinite] rounded-[10px] bg-[#f4b603] delay-[-1s] perspective transform-style',
              'before:absolute before:top-[8px] before:left-[2px] before:h-[9px] before:w-[3px] before:bg-[#fc3c25] before:shadow-[0_25px_#fc3c25]',
              'after:absolute after:top-[8px] after:right-[4px] after:h-[10px] after:w-[4px] after:bg-white after:shadow-[0_26px_white]'
            )}
          >
            {/* light beam */}
            <div
              className={cls(
                'absolute top-[0px] right-[-2px] h-[50px] w-[10px] rounded-[15px] bg-[#0002] transform-style',
                'before:absolute before:top-[8px] before:h-[10px] before:w-[150px] before:origin-left before:bg-gradient-to-r before:from-[#fff6] before:rotate-perspective',
                'after:absolute after:bottom-[8px] after:h-[10px] after:w-[150px] after:origin-left after:bg-gradient-to-r after:from-[#fff6] after:rotate-perspective'
              )}
            ></div>
            <span
              className={cls(
                ' absolute inset-x-[8px] inset-y-[3px] rounded-[10px] bg-[#fdd206]',
                'before:absolute before:top-1/2 before:left-1/2 before:z-10 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-90 before:rounded-[2px] before:bg-white before:p-[2px] before:text-[1px] before:uppercase before:shadow-[0_0_0_1px_#0005] before:content-["Taxi"]'
              )}
            >
              <b
                className={cls(
                  'absolute inset-x-[10px] inset-y-[0px] rounded-[10px] bg-[#111]',
                  'before:absolute before:inset-x-[15px] before:inset-y-[4px] before:rounded-[5px] before:bg-[#fdd206]',
                  'after:absolute after:inset-x-[40px] after:inset-y-[0px] after:rounded-[5px] after:bg-[#fdd206]'
                )}
              ></b>
              <i
                className={cls(
                  'absolute inset-0',
                  'before:absolute before:top-[5px] before:left-[3px] before:h-[3px] before:w-[25px] before:origin-right before:rotate-[15deg] before:bg-[#fdd206] before:shadow-[75px_18px_#fdd206]',
                  'after:absolute after:bottom-[5px] after:left-[3px] after:h-[3px] after:w-[25px] after:origin-right after:rotate-[-15deg] after:bg-[#fdd206] after:shadow-[75px_-18px_#fdd206]'
                )}
              ></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
