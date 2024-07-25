export interface IMarkdownText {
    markdown: string,
    previewer: string
}

export enum MarkdownActionTypes {
    UPDATE_MARKDOWN_TEXT = "UPDATE_MARKDOWN_TEXT",
    UPDATE_PREVIEWER_TEXT = "UPDATE_PREVIEWER_TEXT",
}

export interface IMarkdownUpdateTextAction {
    type: MarkdownActionTypes.UPDATE_MARKDOWN_TEXT,
    payload: string
}

export interface IPreviewerUpdateTextAction {
    type: MarkdownActionTypes.UPDATE_PREVIEWER_TEXT,
    payload: string
}

export type MarkdownAction = IMarkdownUpdateTextAction | IPreviewerUpdateTextAction