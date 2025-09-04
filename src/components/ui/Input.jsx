export default function Input({ ...props }) {
  return (
    <input
      {...props}
      className="w-full bg-[rgba(255, 255, 255, 0.4)] border-[1px] border-[rgba(255, 255, 255, 1)] rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
