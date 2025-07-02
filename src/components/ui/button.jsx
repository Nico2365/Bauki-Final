export function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl disabled:opacity-50"
    >
      {children}
    </button>
  );
}