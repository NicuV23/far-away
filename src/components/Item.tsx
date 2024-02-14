import React, { useState } from "react";

interface ItemProps {
  onDeleteItem: () => void;
  onTogglePacked: (packed: boolean) => void;
  item: { id: number; description: string; quantity: number; packed: boolean };
}

const Item: React.FC<ItemProps> = ({ item, onDeleteItem, onTogglePacked }) => {
  const [checked, setChecked] = useState<boolean>(item.packed);

  const handleCheckboxChange = () => {
    setChecked(!checked);
    onTogglePacked(!checked);
  };

  return (
    <li>
      <input
        onChange={handleCheckboxChange}
        type="checkbox"
        checked={checked}
      />
      <span style={checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={onDeleteItem}>❌</button>
    </li>
  );
};

export default Item;
