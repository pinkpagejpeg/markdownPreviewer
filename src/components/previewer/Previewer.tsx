import { FC, useEffect } from "react"
import classes from "../../styles/main.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { marked } from "marked"
import { useActions } from "../../hooks/useActions"

const Previewer: FC = () => {
    const { markdown, previewer } = useTypedSelector(state => state.markdown)
    const { updatePreviewerText } = useActions()

    marked.setOptions({
        breaks: true,
        gfm: true,
    });

    useEffect(() => {
        const markdownText = marked(markdown)
        updatePreviewerText(String(markdownText))
    }, [markdown])

    return (
        <div className={classes.previewer__box}>
            <h2 className={classes.previewer__title}>Previewer</h2>
            <div id="preview"
                className={classes.previewer__content}
                dangerouslySetInnerHTML={{ __html: previewer }}>
            </div>
        </div>
    );
}

export default Previewer;