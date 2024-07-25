import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"))