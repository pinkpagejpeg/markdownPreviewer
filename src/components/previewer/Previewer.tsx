import { FC, useEffect } from "react"
import classes from "../../styles/main.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { marked } from "marked"
import { useActions } from "../../hooks/useActions"

const Previewer: FC = () => {
    const { markdown, previewer } = useTypedSelector(state => state.markdown)
    const { updatePreviewerText } = useActions()

    useEffect(() => {
        const getMarkdownText = async () => {
            const markdownText = await marked(markdown)
            updatePreviewerText(markdownText)
        }
        getMarkdownText()
    }, [markdown])

    marked.setOptions({
        breaks: true,
    });

    console.log(markdown, previewer)

    return (
        <div className={classes.previewer__box}>
            <h2 className={classes.previewer__title}>Previewer</h2>
            {previewer !== '' &&
                <div id="previewer"
                    className={classes.previewer__content}
                    dangerouslySetInnerHTML={{ __html: previewer }}>
                </div>
            }
        </div>
    );
}

export default Previewer;