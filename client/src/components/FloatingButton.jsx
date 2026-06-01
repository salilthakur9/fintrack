import { FaPlus } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <button
      className="
      fixed
      bottom-6
      right-6
      h-16
      w-16
      rounded-full
      bg-cyan-400
      text-black
      flex
      items-center
      justify-center
      shadow-lg
      hover:scale-110
      transition
      "
    >
      <FaPlus size={20} />
    </button>
  );
};

export default FloatingButton;