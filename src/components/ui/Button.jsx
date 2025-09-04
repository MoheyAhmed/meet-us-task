export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full bg-[#9414FF] mt-3 text-white py-2 rounded-lg disabled:opacity-50"
    >
      {children}
    </button>
  );
}
