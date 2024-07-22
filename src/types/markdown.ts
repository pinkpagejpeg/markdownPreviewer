export interface IMarkdownText {
    text: string,
}

export enum MarkdownActionTypes {
    UPDATE_MARKDOWN_TEXT = "UPDATE_MARKDOWN_TEXT",
}

export interface IMarkdownUpdateTextAction {
    type: MarkdownActionTypes.UPDATE_MARKDOWN_TEXT,
    payload: string
}

export type MarkdownAction = IMarkdownUpdateTextAction