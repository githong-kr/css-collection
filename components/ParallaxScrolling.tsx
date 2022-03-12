import { cls } from '@libs/utils';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function ParallaxScrolling() {
  const [isActiveMenu, setIsActiveMenu] = useState([true, false, false, false]);
  const [scrollY, setScrollY] = useState(0);

  const onClickMenu = (index: number) => {
    const clickedMenuList = [false, false, false, false];
    clickedMenuList[index] = true;
    setIsActiveMenu(clickedMenuList);
  };

  const menus = [
    { title: 'Home' },
    { title: 'About' },
    { title: 'Work' },
    { title: 'Contact' },
  ];

  const scrollListener = (e: React.UIEvent<HTMLDivElement>) => {
    const stars = document.getElementById('stars');
    const moon = document.getElementById('moon');
    const mountains_behind = document.getElementById('mountains_behind');
    const mountains_front = document.getElementById('mountains_front');
    const text = document.getElementById('text');
    const btn = document.getElementById('btn');
    const header = document.getElementById('header');

    setScrollY(e.currentTarget.scrollTop);
    stars!.style.left = `${scrollY * 0.25}px`;
    moon!.style.top = `${scrollY * 1.05}px`;
    mountains_behind!.style.top = `${scrollY * 0.5}px`;
    mountains_front!.style.top = `${scrollY * 0}px`;
    text!.style.marginRight = `${scrollY * 4}px`;
    text!.style.marginTop = `${scrollY * 1.5}px`;
    btn!.style.marginTop = `${scrollY * 1.5}px`;
    header!.style.top = `${scrollY * -0.5}px`;
  };

  return (
    <>
      <div
        onScroll={scrollListener}
        className="h-screen min-h-screen w-screen overflow-x-hidden scroll-smooth bg-gradient-to-b from-[#2b1055] to-[#7597de]"
      >
        <header
          id="header"
          className="overflow-hidden absolute top-0 left-0 z-20 flex w-full items-center justify-between px-[30px] py-[30px]"
        >
          <span className="cursor-pointer select-none text-4xl font-bold uppercase tracking-wide text-white">
            Logo
          </span>

          <ul className="flex items-center justify-center">
            {menus.map((menu, index) => (
              <li
                onClick={() => onClickMenu(index)}
                key={index}
                className="ml-5"
              >
                <span
                  className={cls(
                    'clicked cursor-pointer select-none rounded-2xl px-[15px] py-[6px] text-white',
                    'hover:bg-white hover:text-[#2b1055]',
                    isActiveMenu[index] ? 'bg-white text-[#2b1055]' : ''
                  )}
                >
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>
        </header>
        <section
          className={cls(
            'relative flex h-screen w-full items-center justify-center overflow-hidden p-[100px]',
            'before:absolute before:bottom-0 before:z-20 before:h-[100px] before:w-full before:bg-gradient-to-t before:from-[#1c0522] before:to-transparent'
          )}
        >
          <img
            id="stars"
            className="absolute top-0 left-0 h-full w-full object-cover"
            src="/images/ParallaxScrolling/stars.png"
          />
          <img
            id="moon"
            className="absolute top-0 left-0 h-full w-full object-cover mix-blend-screen"
            src="/images/ParallaxScrolling/moon.png"
          />
          <img
            id="mountains_behind"
            className="absolute top-0 left-0 h-full w-full object-cover"
            src="/images/ParallaxScrolling/mountains_behind.png"
          />
          <h2
            id="text"
            className="absolute -right-[100vw] z-[9] whitespace-nowrap text-[15vw] font-semibold text-white"
          >
            Moon Light
          </h2>
          <span
            id="btn"
            className="z-[9] translate-y-[150px] rounded-[40px] bg-white px-[30px] py-[8px] text-[1.5em] text-[#2b1055]"
          >
            Explore
          </span>
          <img
            id="mountains_front"
            className="absolute top-0 left-0 z-10 h-full w-full object-cover"
            src="/images/ParallaxScrolling/mountains_front.png"
          />
        </section>
        <div className="relative bg-[#1c0522] p-[100px]">
          <h2 className="mb-[10px] text-[3.5em] text-white">
            Parallax Scrolling Effects
          </h2>
          <p className="text-[1.2em] text-white">
            Disclaimer Under Section 107 of the Copyright Act 1976, allowance is
            made for "fair use" for purposes such as criticism, comment, news
            reporting, teaching, scholarship, and research. Fair use is a use
            permitted by copyright statute that might otherwise be infringing.
            Non-profit, educational or personal use tips the balance in favor of
            <br />
            <br />
            Disclaimer Under Section 107 of the Copyright Act 1976, allowance is
            made for "fair use" for purposes such as criticism, comment, news
            reporting, teaching, scholarship, and research. Fair use is a use
            permitted by copyright statute that might otherwise be infringing.
            Non-profit, educational or personal use tips the balance in favor of
            fair useDisclaimer video is for educational purpose only. Copyright
            Disclaimer Under Section 107 of the Copyright Act 1976, allowance is
            made for "fair use" for purposes such as criticism, comment, news
            reporting, teaching, scholarship, and research. Fair use is a use
            permitted by copyright statute that might otherwise be infringing.
            Non-profit, educational or personal use tips the balance in favor of
            fair useDisclaimer video is for educational purpose only.
            <br />
            <br />
            Disclaimer Under Section 107 of the Copyright Act 1976, allowance is
            made for "fair use" for purposes such as criticism, comment, news
            reporting, teaching, scholarship, and research. Fair use is a use
            permitted by copyright statute that might otherwise be infringing.
            Non-profit, educational or personal use tips the balance in favor of
            fair useDisclaimer video is for educational purpose only. Copyright
            Disclaimer Under Section 107 of the Copyright Act 1976, allowance is
            made for "fair use" for purposes such as criticism, comment, news
            reporting, teaching, scholarship, and research. Fair use is a use
            permitted by copyright statute that might otherwise be infringing.
            Non-profit, educational or personal use tips the balance in favor of
            fair useDisclaimer video is for educational purpose only.
            <br />
            <br />
            Disclaimer Under Section 107 of the Copyright Act 1976, allowance is
            made for "fair use" for purposes such as criticism, comment, news
            reporting, teaching, scholarship, and research. Fair use is a use
            permitted by copyright statute that might otherwise be infringing.
            Non-profit, educational or personal use tips the balance in favor of
            fair useDisclaimer video is for educational purpose only. Copyright
            Disclaimer Under Section 107 of the Copyright Act 1976, allowance is
            made for "fair use" for purposes such as criticism, comment, news
            reporting, teaching, scholarship, and research. Fair use is a use
            permitted by copyright statute that might otherwise be infringing.
            Non-profit, educational or personal use tips the balance in favor of
            fair useDisclaimer video is for educational purpose only.
          </p>
        </div>
      </div>
    </>
  );
}
