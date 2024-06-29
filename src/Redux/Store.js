import {configureStore} from '@reduxjs/toolkit'
import menuSlice from './MenuSlice'


const reduxStore=configureStore({
reducer:{
menu:menuSlice
}
})
export default reduxStore