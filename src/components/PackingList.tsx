import React from "react";
import Item from "./Item";

interface ItemProps {
  items: Array<{
    id: number;
    description: string;
    quantity: number;
    packed: boolean;
  }>;

  onDeleteItem: (id: number) => void;
}

const PackingList: React.FC<ItemProps> = ({ items, onDeleteItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={() => onDeleteItem(item.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
