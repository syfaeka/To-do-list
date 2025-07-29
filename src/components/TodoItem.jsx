import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && text.trim()) onEdit(todo.id, text);
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-700 rounded-xl shadow">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="w-4 h-4 accent-blue-500"
        />
        {isEditing ? (
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border-b bg-transparent outline-none text-sm"
          />
        ) : (
          <span
            className={`text-sm ${
              todo.done ? "line-through text-gray-400" : "text-gray-800 dark:text-gray-100"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2 text-xs">
        <button onClick={handleEdit} className="text-blue-500 hover:underline">
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => onDelete(todo.id)} className="text-pink-500 hover:underline">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;