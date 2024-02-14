import React from "react";

interface StatsProps {
  numItems: number;
  numPacked: number;
}

const Stats: React.FC<StatsProps> = ({ numItems, numPacked }) => {
  const procents =
    numItems !== 0 ? ((numPacked / numItems) * 100).toFixed(2) : 0;

  return (
    <footer className="stats">
      <em>
        {`💼 You have ${numItems} items on your list, and you already packed :
        ${numPacked} ( ${procents} %)`}
      </em>
    </footer>
  );
};

export default Stats;
