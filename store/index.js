import reducer from './reducer/reducer';
import {createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';




const store = createStore(reducer,applyMiddleware(thunk))//jab ham koiikam functional karty hain to thunk install karenge or wo 1 method deta hai applymidleware kaa us me thunk dedenge


export default store;