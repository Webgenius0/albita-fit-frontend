import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

type PropTypes = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  target?: string;
  textBold?: boolean;
  variant?: "hover" | "normal";
  text: string;
  hasArrow?: boolean;
  onlyButton?: boolean;
};

const CommonButton = ({
  target = "/",
  textBold,
  variant = "normal",
  text = "click me",
  hasArrow,
  onlyButton,
  ...props
}: PropTypes) => {
  const classList = `block py-2.5 text-white ${textBold ? `font-bold` : `font-normal`} ${variant === "normal" ? `bg-primary-pink px-7` : `border-primary-pink hover:bg-primary-pink border-[2px] border-solid px-6`} h-fit w-fit rounded-[50px] ${hasArrow ? `flex items-center gap-3` : ``} duration-300 ease-in-out cursor-pointer`;

  return (
    <>
      {onlyButton ? (
        <button {...props} className={classList}>
          <span>{text}</span>
          {hasArrow && (
            <span>
              <FaArrowRight />
            </span>
          )}
        </button>
      ) : (
        <Link to={target} className={classList}>
          <span>{text}</span>
          {hasArrow && (
            <span>
              <FaArrowRight />
            </span>
          )}
        </Link>
      )}
    </>
  );
};

export default CommonButton;
