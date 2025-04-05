import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const first_time_user = localStorage.getItem("first_time_user");

    if (!first_time_user) {
      navigate("/get-started");
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h3>This is home page</h3>
    </div>
  );
};

export default Home;
