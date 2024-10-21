import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { store } from './store'
import HomePage from './pages/home'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Toaster gutter={10000} toastOptions={{ duration: 4000 }} />
      <Router>
      <Routes>
        <Route path="/" element={ <HomePage />} />
      </Routes>
      </Router>
    </Provider>
  )
}

export default App
