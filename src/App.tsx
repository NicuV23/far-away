import React, { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

interface Item {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const numItems: number = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const handleAddItems = (item: Item): void => {
    setItems((prevItems) => [...prevItems, { ...item, packed: false }]);
  };

  const handleDeleteItem = (id: number): void => {
    if (id === 0) {
      setItems([]);
    } else {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  const handleTogglePacked = (id: number, packed: boolean): void => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, packed } : item))
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
      />
      <Stats numPacked={numPacked} numItems={numItems} />
    </div>
  );
};

export default App;
