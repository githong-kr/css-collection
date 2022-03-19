import { cls } from "@libs/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Calculator() {
  return (
    <>
      {/* Container */}
      <div className="flex h-screen w-full items-center justify-center bg-[#121212]">
        {/* shadow */}
        <div className="absolute top-[calc(50%+150px)] left-[50%] h-[30px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[rgba(0,0,0,0.5)]"></div>
        {/* bowl */}
        <div
          className={cls(
            "before:absolute before:top-[-20px] before:left-1/2 before:h-[60px] before:w-[50%] before:-translate-x-1/2 before:rounded-[50%] before:border-[15px] before:border-[#444] before:shadow-bowl_head",
            "relative h-[300px] w-[300px] origin-bottom animate-[bowlTilting_5s_linear_infinite] rounded-[50%] border-[8px] border-transparent bg-[rgba(255,255,255,0.1)]",
            "after:absolute after:top-[40%] after:left-[50%] after:h-[80px] after:w-[150px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-[50%] after:bg-[rgba(255,255,255,0.05)]"
          )}
        >
          {/* liquid */}
          <div
            className={cls(
              "before:shadow-bowl_liquid before:absolute before:top-[-10px] before:h-[20px] before:w-full before:rounded-[50%] before:bg-[#1fa4e0]",
              "absolute top-[50%] left-[5px] right-[5px] bottom-[5px] origin-top animate-[liquidTilting_5s_linear_infinite] rounded-b-[150px] bg-[#41c1fb] drop-shadow-bowl_liquid"
            )}
          ></div>
        </div>
      </div>
    </>
  );
}
