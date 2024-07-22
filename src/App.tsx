import { FC } from 'react'
import classes from "./styles/main.module.scss"

const App: FC = () => {

  return (
      <div className={classes.container}>
        <h1>Markdown Previewer</h1>
        <div className={classes.mainbox}>

        </div>
      </div>
  )
}

export default App
