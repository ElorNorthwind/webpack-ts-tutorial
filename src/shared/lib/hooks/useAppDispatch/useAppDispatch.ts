import { AppDispatch } from "app/providers/StoreProvider";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
