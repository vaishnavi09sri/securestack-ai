import React from 'react';

export const ScoreMeter = ({ score = 88, size = 160, strokeWidth = 12 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  let colorClass = 'stroke-pink-500';
  let textClass = 'text-pink-400';
  if (score < 60) {
    colorClass = 'stroke-rose-500';
    textClass = 'text-rose-500';
  } else if (score < 80) {
    colorClass = 'stroke-fuchsia-400';
    textClass = 'text-fuchsia-400';
  } else if (score >= 80) {
    colorClass = 'stroke-pink-500';
    textClass = 'text-pink-400';
  }

  return (
    <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Track Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(30, 20, 35, 0.8)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className={`${colorClass} transition-all duration-1000 ease-out`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
      {/* Center Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className={`text-3xl font-extrabold tracking-tight ${textClass}`}>
          {score}
        </span>
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-0.5">
          Security Score
        </span>
      </div>
    </div>
  );
};
