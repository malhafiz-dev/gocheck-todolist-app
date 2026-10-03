import { useState } from "react";

function Form({ onAddItem }) {
  const [title, setTItle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    if (!title) return;

    const newNote = {
      id: Math.random(),
      title: title,
      done: false,
    };

    onAddItem(newNote);
    setTItle("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau dicatat? 😊</h3>
      <input
        type="text"
        name="title"
        id=""
        value={title}
        onChange={(e) => {
          setTItle(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
