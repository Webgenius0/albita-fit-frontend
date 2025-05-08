import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ ...props }) => {
  const navigate = useNavigate();
  return (
    <div
      {...props}
      onClick={(event) => {
        event.preventDefault();
        navigate(-1);
      }}
      className="mb-8 inline-block cursor-pointer text-[#e16891]"
    >
      <ChevronLeft className="h-9 w-9" />
    </div>
  );
};

export default BackButton;
