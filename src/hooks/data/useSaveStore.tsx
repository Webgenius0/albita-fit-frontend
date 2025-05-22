import { useAppDispatch } from "@/redux/hooks";

const useSaveStore = () => {
  const dispatch = useAppDispatch();

  // @ts-expect-error set data is complex type
  const saveInfo = (data: Record<string, string | number|boolean>, setData) => {
    dispatch(setData(data));
  };

  return saveInfo;
};

export default useSaveStore;
