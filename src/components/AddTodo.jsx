import { useState } from "react";

function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        className="flex-1 p-3 rounded-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 placeholder:text-gray-400 text-sm shadow-sm"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-pink-400 to-blue-400 text-white px-5 py-2 rounded-full text-sm shadow-md hover:brightness-110 transition"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;