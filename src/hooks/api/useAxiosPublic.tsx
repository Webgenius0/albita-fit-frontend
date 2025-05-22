import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: "https://aaronbuos-mern-express.vercel.app/api/v1",
  });

  return axiosPublic;
};

export default useAxiosPublic;
