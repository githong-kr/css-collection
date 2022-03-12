import { cls } from '@libs/utils';
import Link from 'next/link';
import { useState } from 'react';

export default function LightBulbSwitch() {
  const [isNavClicked, setIsNavClicked] = useState<Boolean>(false);
  const [isListClicked, setIsListClicked] = useState<Boolean[]>([
    true,
    false,
    false,
    false,
    false,
  ]);

  const onClickNav = () => {
    setIsNavClicked((prev) => !prev);
  };

  const onClickList = (index: number) => {
    const listClickedList = [false, false, false, false, false];
    listClickedList[index] = true;
    setIsListClicked(listClickedList);
  };

  const menus = [
    {
      name: 'Home',
      color: '#f44336',
      svg: (index: number) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke={isListClicked[index] ? 'white' : 'currentColor'}
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      name: 'About',
      color: '#ffa117',
      svg: (index: number) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke={isListClicked[index] ? 'white' : 'currentColor'}
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      name: 'Messages',
      color: '#0fc70f',
      svg: (index: number) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke={isListClicked[index] ? 'white' : 'currentColor'}
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      name: 'Photos',
      color: '#2196f3',
      svg: (index: number) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke={isListClicked[index] ? 'white' : 'currentColor'}
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      name: 'Settings',
      color: '#b145e9',
      svg: (index: number) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke={isListClicked[index] ? 'white' : 'currentColor'}
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="h-screen w-full bg-[#3d4152]">
        <div
          className={cls(
            'fixed inset-5 flex w-20 items-center justify-center bg-white transition-all duration-500',
            isNavClicked ? 'w-64 ' : ''
          )}
        >
          <div
            onClick={onClickNav}
            className={cls(
              'before:absolute before:h-[2px] before:w-[30px] before:-translate-y-[8px] before:bg-[#333] before:transition-all before:duration-500',
              'absolute top-0 left-0 flex h-16 w-full cursor-pointer items-center justify-start border-b border-b-black border-opacity-25 px-[23px]',
              'after:absolute after:h-[2px] after:w-[30px] after:translate-y-[8px] after:bg-[#333] after:shadow-[0_-8px_0px_0px_#333] after:transition-all after:duration-500',
              isNavClicked
                ? 'before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45 after:shadow-[0_0px_0px_0px_#333]'
                : ''
            )}
          ></div>
          <ul className="flex w-full flex-col space-y-4">
            {menus.map((menu, index) => {
              return (
                <li
                  key={index}
                  onClick={() => onClickList(index)}
                  className={cls(
                    'relative h-16 w-full px-3 transition-all duration-500',
                    isListClicked[index] ? 'translate-x-[30px]' : '',
                    isNavClicked && isListClicked[index]
                      ? 'translate-x-[10px]'
                      : ''
                  )}
                >
                  <div className="align-center relative flex items-center justify-start">
                    <span
                      className={cls(
                        `before:absolute before:top-[10px] before:left-0 before:z-[-1] before:h-full before:w-full before:bg-[${menu.color}] before:opacity-0 before:blur-[8px] before:transition-all before:duration-500`,
                        'relative flex h-[55px] min-w-[55px] items-center justify-center rounded-xl leading-[60px] text-[#222] transition-all duration-500',
                        isListClicked[index]
                          ? `bg-[${menu.color}] before:opacity-50`
                          : ``
                      )}
                    >
                      {menu.svg(index)}
                    </span>
                    <span
                      className={cls(
                        'relative flex h-[60px] items-center px-[15px]  text-[#333] transition-all duration-500',
                        isNavClicked
                          ? 'visible opacity-100'
                          : 'invisible opacity-0',
                        isListClicked[index] ? `text-[${menu.color}]` : ''
                      )}
                    >
                      {menu.name}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
