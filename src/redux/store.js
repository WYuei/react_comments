/*redux最核心的管理对象*/
import {createStore,applyMiddleware} from '../../node_modules/redux'
import {comments} from "./reducers";
import thunk from '../../node_modules/redux-thunk'
import {composeWithDevTools} from '../../node_modules/redux-devtools-extension'
export default createStore(
    comments,
    composeWithDevTools(applyMiddleware(thunk))
)
