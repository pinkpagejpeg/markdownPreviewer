import { Dispatch } from "redux"
import { MarkdownAction, MarkdownActionTypes } from "../../types/markdown"

export const updateMarkdownText = (markdown: string) => {
    return (dispatch: Dispatch<MarkdownAction>) => {
        dispatch({
            type: MarkdownActionTypes.UPDATE_MARKDOWN_TEXT,
            payload: markdown
        })
    }
}

export const updatePreviewerText = (previewer: string) => {
    return (dispatch: Dispatch<MarkdownAction>) => {
        dispatch({
            type: MarkdownActionTypes.UPDATE_PREVIEWER_TEXT,
            payload: previewer
        })
    }
}