import {TypedUseSelectorHook} from 'react-redux'
import {AppDispatch, AppState} from '../store/store'
import {useDispatch, useSelector} from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
