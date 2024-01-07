import { useAppSelector } from "./useRedux";

export default function useSelectedPage() {
  const { page } = useAppSelector((state) => state.global);

  return page;
}
