import { FC } from "react"
import classes from "./styles/main.module.scss"
import Editor from "./components/editor/Editor"
import Previewer from "./components/previewer/Previewer"

const App: FC = () => {

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Markdown Previewer</h1>
      <div className={classes.mainbox}>
        <Editor />
        <Previewer />
      </div>
    </div>
  )
}

export default App
