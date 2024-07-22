import { FC } from "react"
import classes from "../../styles/main.module.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { marked } from "marked"

const Previewer: FC = () => {
    const { text } = useTypedSelector(state => state.markdown)

    const getMarkdownText = () => {
        const markdownText = marked(text)
        return { __html: markdownText }
    }

    return (
        <div className={classes.previewer__box}>
            <h2 className={classes.previewer__title}>Previewer</h2>
            <div id="previewer"
                className={classes.previewer__content}
                dangerouslySetInnerHTML={getMarkdownText()}></div>
        </div>
    );
}

export default Previewer;