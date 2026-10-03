import { useState } from "react";
import Item from "./Item";

function CheckList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  function sortItems() {
    switch (sortBy) {
      case "title":
        return items.slice().sort((a, b) => a.title.localeCompare(b.title));
      case "done":
        return items.slice().sort((a, b) => Number(a.done) - Number(b.done));
      case "input":
      default:
        return items;
    }
  }

  return (
    <div className="list">
      <ul>
        {sortItems().map((list) => (
          <Item
            key={list.id}
            item={list}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="input">Urut berdasarkan input</option>
          <option value="title">Urut berdasarkan title</option>
          <option value="done">Urut berdasarkan done</option>
        </select>
        <button onClick={onClearItems}>Hapus Semua Catatan</button>
      </div>
    </div>
  );
}

export default CheckList;
