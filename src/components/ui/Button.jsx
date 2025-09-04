export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full bg-[#9414FF] mt-3 cursor-pointer text-white text-lg py-2 rounded-lg "
    >
      {children}
    </button>
  );
}
