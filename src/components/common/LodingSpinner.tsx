import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";

const LoadingSpinner = ({
  color = "white",
  size = "20",
}: {
  color?: string;
  size?: string;
}) => {
  return (
    <div>
      <LineSpinner size={size} stroke="3" speed="1" color={color} />
    </div>
  );
};

export default LoadingSpinner;
