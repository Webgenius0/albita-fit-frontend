import CoverSection from "@/components/single-training/CoverSection";
import bg from "@/assets/images/single-training-cover.jpg";
import { useParams } from "react-router-dom";

const SingleTraining = () => {
  const { id } = useParams();

  return (
    <div>
      <CoverSection
        bgImg={bg}
        title={id?.split("-").join(" ")}
        sessionName="Piernas"
      />
    </div>
  );
};

export default SingleTraining;
