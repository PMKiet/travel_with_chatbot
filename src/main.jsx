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


//from redux persist
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

//from i18n
import i18n from './i18n'

const persistConfig = {
  key: 'root',
  // Kiểm tra nếu storage có thuộc tính default thì dùng nó, nếu không dùng chính nó

  // Lỗi này thường xuất hiện khi bạn sử dụng Vite.Vite sử dụng ES Modules(ESM) gốc, trong khi redux- persist là một thư viện
  //  cũ hơn sử dụng CommonJS.Khi Vite import một file CommonJS mà không có sự tương thích hoàn hảo, nó sẽ bọc nội dung vào một object có khóa default.
  storage: storage.default ? storage.default : storage
}

const persistedReducer = persistReducer(persistConfig, allReducer)

const store = createStore(
  persistedReducer,
  // Source - https://stackoverflow.com/a/43927909
  // Posted by Charlie L, modified by community. See post 'Timeline' for change history
  // Retrieved 2026-04-06, License - CC BY-SA 4.0

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

const persistor = persistStore(store)


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <PersistGate persistor={persistor} loading={null}>
          <AppRouter />
        </PersistGate>
      </BrowserRouter>
    </StrictMode>
  </Provider>
)
