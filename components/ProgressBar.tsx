"use client";

import { useEffect, useState } from "react";

const GOAL = 15000;

export const ProgressBar = ({ current = 0 }: { current?: number }) => {
  const [width, setWidth] = useState(0);
  const percentage = Math.min(100, Math.round((current / GOAL) * 100));

  useEffect(() => {
    const timeout = setTimeout(() => setWidth(percentage), 100);
    return () => clearTimeout(timeout);
  }, [percentage]);

  return (
    <div>
      <div className="flex justify-between text-sm mb-2 text-base-300">
        <span>{current.toLocaleString("de-DE")} € gesammelt</span>
        <span>{GOAL.toLocaleString("de-DE")} € Ziel</span>
      </div>
      <div className="w-full bg-base-700 rounded-full h-4 overflow-hidden">
        <div
          className="bg-primary-400 h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
      <div className="text-center text-primary-300 font-bold mt-2">
        {percentage}% erreicht
      </div>
    </div>
  );
};
