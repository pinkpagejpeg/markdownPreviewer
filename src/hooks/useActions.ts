import { useAppDispatch } from "./useAppDispatch"
import MarkdownActionCreators from "../store/action-creators/index"

export const useActions = () => {
    const dispatch = useAppDispatch()
    return {
        updateMarkdownText: (markdown: string) => dispatch(MarkdownActionCreators.updateMarkdownText(markdown)),
        updatePreviewerText: (previewer: string) => dispatch(MarkdownActionCreators.updatePreviewerText(previewer))
    }
}