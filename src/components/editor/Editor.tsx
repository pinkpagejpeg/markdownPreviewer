import { FC } from "react"
import classes from "../../styles/main.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const Editor: FC = () => {
    const { markdown } = useTypedSelector(state => state.markdown)
    const { updateMarkdownText } = useActions()

    const textareaHandler = (e: { target: { value: string } }) => {
        updateMarkdownText(e.target.value)
    }

    return (
        <div className={classes.editor__box}>
            <h2 className={classes.editor__title}>Editor</h2>
            <textarea name="editor"
                className={classes.editor__textarea}
                id="editor"
                onChange={textareaHandler}
                value={markdown}></textarea>
        </div>
    );
}

export default Editor;