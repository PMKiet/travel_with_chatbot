import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//component

//route
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from '@/routes/AppRouter'

//from redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { allReducer } from '@/redux'

const store = createStore(
  allReducer,

  //quan trong hien thi state trong redux devtool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </StrictMode>
  </Provider>
)
