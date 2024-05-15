import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './userSlice/userSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { version } from 'react'
import persistStore from 'redux-persist/es/persistStore'

// tạo các reducer thành 1 rootReducer
const rootReducer = combineReducers({
    user: userReducer
})
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
}

// tạo ra reducer có khả năng persist(lưu trữ)
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    // được tùy chỉnh để bỏ qua kiểm tra tính serializable, vì redux-persist có thể chứa các giá trị không thể tuần tự hóa.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }
        )
})

// persistStore được sử dụng để tạo ra một persistor, quản lý quá trình lưu trữ và khôi phục trạng thái.
export const persistor = persistStore(store);