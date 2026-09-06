import React from 'react';

interface SketchStrokeProps {
  className?: string;
  color?: string;
}

export const SketchStroke: React.FC<SketchStrokeProps> = ({
  className = '',
  color = '#C7FF32',
}) => {
  return (
    <svg
      viewBox="0 0 240 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-[200px] h-3 overflow-visible select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2.5 8.5C38.2 3.8 118.6 2.1 237.5 5.2C178.4 6.9 76.1 8.8 16.8 9.8"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
};

export const SketchDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full flex items-center justify-center py-6 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 800 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-2xl h-4 text-[#C7FF32]/25 overflow-visible"
        aria-hidden="true"
      >
        <path
          d="M1 8.5C120.5 4.5 380.2 12.5 799 7.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
