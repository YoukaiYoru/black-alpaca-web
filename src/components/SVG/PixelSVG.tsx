import React from "react";

type Props = {
  ref?: React.RefObject<SVGSVGElement | null>;
} & React.SVGProps<SVGSVGElement>;

export default function PixelSVG({ ref, ...props }: Props) {
  return (
    <svg
      ref={ref}
      width="100%"
      height="100%"
      viewBox="0 0 290 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_160_1231)">
        {Array.from({ length: 12 }).map((_, row) =>
          Array.from({ length: 12 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={col * 25}
              y={row * 25}
              width="25"
              height="25"
              fill="#000000"
              className="m-0"
            />
          ))
        )}
      </g>
      <defs>
        <clipPath id="clip0_160_1231">
          <rect width="290" height="300" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
