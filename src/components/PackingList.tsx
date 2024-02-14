import React, { useState } from "react";
import Item from "./Item";

interface ItemProps {
  items: Array<ItemType>;
  onDeleteItem: (id: number) => void;
  onTogglePacked: (id: number, packed: boolean) => void;
}

interface ItemType {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

const PackingList: React.FC<ItemProps> = ({
  items,
  onDeleteItem,
  onTogglePacked,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems: ItemType[] = [];

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  const handleClearAll = () => {
    onDeleteItem(0);
  };

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={() => onDeleteItem(item.id)}
            onTogglePacked={(packed) => onTogglePacked(item.id, packed)}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearAll}>Clear</button>
      </div>
    </div>
  );
};

export default PackingList;
