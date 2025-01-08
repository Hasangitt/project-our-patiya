

const SearchDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 bg-gray-800 bg-opacity-75 transition-all duration-300 transform ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white p-4 h-[200px] flex flex-col items-center">
        <button
          onClick={onClose}
          className="self-end text-xl font-semibold text-gray-700"
        >
          X
        </button>
        <input
          type="text"
          placeholder="Search..."
          className="w-full mt-4 p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default SearchDrawer;
