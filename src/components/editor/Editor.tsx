import { FC } from "react"
import classes from "../../styles/main.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useActions } from "../../hooks/useActions"

const Editor: FC = () => {
    const { markdown } = useTypedSelector(state => state.markdown)
    const { updateMarkdownText } = useActions()

    const textareaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateMarkdownText((e.target as HTMLTextAreaElement).value)
    }

    return (
        <div className={classes.editor__box}>
            <h2 className={classes.editor__title}>Editor</h2>
            <textarea id="editor"
                className={classes.editor__textarea}
                onChange={textareaHandler}
                value={markdown} />
        </div>
    );
}

export default Editor;