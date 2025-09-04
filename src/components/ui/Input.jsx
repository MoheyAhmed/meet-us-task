export default function Input({ ...props }) {
  return (
    <input
      {...props}
      className="w-full border border-[#fff] bg-[rgba(255, 255, 255, 1)] text-[#62626B] rounded-lg p-4 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
