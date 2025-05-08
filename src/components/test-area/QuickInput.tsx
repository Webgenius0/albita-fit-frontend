import CommonTitle from "../common/CommonTitle";
import TestInput from "./TestInput";

type PropTypes = {
  title?: string;
  placeholder?: string;
  dataKey: string;
};

const QuickInput = ({
  title = "Cuentanos más sobre eso",
  placeholder = "Respuesta",
  dataKey,
}: PropTypes) => {
  return (
    <div className="space-y-20 text-center">
      <CommonTitle textBold> {title} </CommonTitle>

      <TestInput type="text" storeKey={dataKey} placeholder={placeholder} />
    </div>
  );
};

export default QuickInput;
