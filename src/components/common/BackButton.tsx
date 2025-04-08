import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type PropTypes = {
  target: string;
};

const BackButton = ({ target }: PropTypes) => {
  return (
    <Link to={target} className="mb-8 inline-block text-[#e16891]">
      <ArrowLeft className="h-8 w-8" />
    </Link>
  );
};

export default BackButton;
