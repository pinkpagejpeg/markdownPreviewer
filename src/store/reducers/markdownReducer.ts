import { IMarkdownText, MarkdownAction, MarkdownActionTypes } from "../../types/markdown"

const initialState: IMarkdownText = {
    markdown: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here is some code of mine, \`<div></div>\`, between 2 backticks. Important for later #React!

**bold**... whoa! is fabulous!
Or _italic_. _Forza Italia!_
Or... wait for it... **_both!_**
**Errors?** ~~cross them out~~.

[links](https://www.freecodecamp.org), and
> Block Quotes! are provided too!

tables, here they are:

Header1 | Header2 | Header3?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course, there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Image](https://via.placeholder.com/150)

\`\`\`
Some code block
\`\`\`
`,
    previewer: ''};

export const markdownReducer = (state = initialState, action: MarkdownAction) => {
    switch (action.type) {
        case MarkdownActionTypes.UPDATE_MARKDOWN_TEXT:
            return {...state, markdown: action.payload}
        case MarkdownActionTypes.UPDATE_PREVIEWER_TEXT:
            return {...state, previewer: action.payload}
        default:
            return state
    }
}