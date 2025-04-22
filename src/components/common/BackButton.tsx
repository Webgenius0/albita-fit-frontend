import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={(event) => {
        event.preventDefault();
        navigate(-1);
      }}
      className="mb-8 inline-block cursor-pointer text-[#e16891]"
    >
      <ArrowLeft className="h-8 w-8" />
    </div>
  );
};

export default BackButton;
