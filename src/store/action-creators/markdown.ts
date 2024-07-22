import { Dispatch } from "redux"
import { MarkdownAction, MarkdownActionTypes } from "../../types/markdown"

export const updateMarkdownText = (text: string) => {
    return (dispatch: Dispatch<MarkdownAction>) => {
        dispatch({
            type: MarkdownActionTypes.UPDATE_MARKDOWN_TEXT,
            payload: text
        })
    }
}