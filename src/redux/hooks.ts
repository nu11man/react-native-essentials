import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import type { RootStateType, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
