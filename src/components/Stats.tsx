import React from "react";

interface StatsProps {
  numItems: number;
  numPacked: number;
}

const Stats: React.FC<StatsProps> = ({ numItems, numPacked }) => {
  return (
    <footer className="stats">
      <em>
        💼 You have {numItems} items on tour list, and tou already packed
        {numPacked} (X%)
      </em>
    </footer>
  );
};

export default Stats;
