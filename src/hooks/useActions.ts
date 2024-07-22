import { useAppDispatch } from "./useAppDispatch"
import MarkdownActionCreators from "../store/action-creators/index"

export const useActions = () => {
    const dispatch = useAppDispatch()
    return {
        updateMarkdownText: (text: string) => dispatch(MarkdownActionCreators.updateMarkdownText(text))
    }
}