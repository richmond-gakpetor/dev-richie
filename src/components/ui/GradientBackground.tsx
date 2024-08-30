import React from "react";
import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const colors = [
  "#1E90FF",
  "#4169E1",
  "#4682B4",
  "#00BFFF",
  "#5F9EA0",
  "#87CEEB",
];
const GradientBackground = (props: Props) => {
  const { children } = props;

  return (
    <div
      className={`-z-10 absolute top-[50%] left-[50%] w-full h-[70vh] flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2`}
    >
      <Image src={"/dev-richie.png"} objectFit="cover" layout="fill" alt={"profile-pic"} className="-z-10 opacity-10 m-6 w-full h-full sm:w-3/4 sm:h-3/4 md:w-2/3 md:h-2/3 lg:w-full lg:h-full"
      />

      <div
        className={`absolute inset-0 flex flex-wrap m-auto pointer-events-none -z-10 blur-[8em] opacity-50 scale-80 -left-20`}
      >
        {colors.map((color, i) => {
          return (
            <span
              key={i}
              style={{ backgroundColor: color }}
              className={`w-1/3 h-1/2 rounded-full first:scale-110 last:scale-110 blur-3xl opacity-20 `}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default GradientBackground;
