import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

type PropTypes = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  target?: string;
  textBold?: boolean;
  variant?: "hover" | "normal";
  text: string;
  hasArrow?: boolean;
  onlyButton?: boolean;
  textPink?: boolean;
  disable?: boolean;
};

const CommonButton = ({
  target = "/",
  textBold,
  variant = "normal",
  text = "click me",
  hasArrow,
  onlyButton,
  textPink,
  disable,
  ...props
}: PropTypes) => {
  const classList = `block py-2.5 ${textPink ? `text-primary-pink hover:text-white` : `text-white`} ${textBold ? `font-bold` : `font-normal`} ${variant === "normal" ? `bg-primary-pink px-7` : `border-primary-pink hover:bg-primary-pink border-[2px] border-solid px-6`} h-fit w-fit rounded-[50px] ${hasArrow ? `flex items-center gap-3` : ``} duration-300 ease-in-out ${disable ? `cursor-not-allowed` : `cursor-pointer `} `;

  return (
    <>
      {onlyButton ? (
        <button
          onClick={(event) => {
            if (disable) return event.preventDefault();
          }}
          style={{
            backgroundColor: disable ? `gray` : ``,
            opacity: disable ? `0.6` : ``,
          }}
          {...props}
          className={classList}
        >
          <span>{text}</span>
          {hasArrow && (
            <span>
              <FaArrowRight />
            </span>
          )}
        </button>
      ) : (
        <Link
          onClick={(event) => {
            if (disable) return event.preventDefault();
          }}
          style={{
            backgroundColor: disable ? `gray` : ``,
          }}
          to={target}
          className={classList}
        >
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
