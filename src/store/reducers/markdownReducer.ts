import { IMarkdownText, MarkdownAction, MarkdownActionTypes } from "../../types/markdown"

const initialState: IMarkdownText = {
    text: `# Heading 1
    ## Heading 2
    [Link](https://example.com)
        \`Inline code\`
        \`\`\`
        Code block
        \`\`\`
        - List item
        > Blockquote
        ![Image](https://via.placeholder.com/150)
        **Bold text**`
}

export const markdownReducer = (state = initialState, action: MarkdownAction) => {
    switch (action.type) {
        case MarkdownActionTypes.UPDATE_MARKDOWN_TEXT:
            return {...state, text: action.payload}
        default:
            return state
    }
}