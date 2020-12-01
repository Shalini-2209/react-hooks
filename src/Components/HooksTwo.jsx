import React, { useEffect, useState } from "react";

const HooksTwo = () => {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("Updated");
  }, [count]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10),
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>

      <input type="text" onChange={(e) => setName(e.target.value)} />

      <button onClick={() => setCount((preCount) => preCount + 1)}>
        Click me
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HooksTwo;
