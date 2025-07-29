import DatePicker from "react-datepicker";

function Header({ date, setDate, darkMode, setDarkMode }) {
  const parsedDate = new Date(date);

  return (
    <div className="flex flex-col items-center gap-1 mb-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full"
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1 className="text-2xl font-bold">Daily Focus</h1>
      <DatePicker
        selected={parsedDate}
        onChange={(dateObj) =>
          setDate(dateObj.toISOString().split("T")[0])
        }
        dateFormat="EEEE, MMMM d, yyyy"
        className="text-sm text-center border-none bg-transparent text-gray-600 dark:text-gray-300"
      />
    </div>
  );
}

export default Header;
