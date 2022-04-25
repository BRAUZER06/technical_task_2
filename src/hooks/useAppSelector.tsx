import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/index";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
