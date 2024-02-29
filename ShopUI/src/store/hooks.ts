import {useSelector, useDispatch, type TypedUseSelectorHook} from "react-redux";
import {AppDispatch, RootType} from ".";
type DispatchFunction = () => AppDispatch;
export const useCartDispatch: DispatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootType> = useSelector;
