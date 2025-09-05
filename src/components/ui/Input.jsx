export default function Input({ ...props }) {
  return (
    <input
      {...props}
      className="w-full border border-[#fff]  bg-[#ffffff66] text-[#62626B] rounded-lg ps-10 py-4 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
