import { combineReducers } from "redux";
import reducer__image from './reducer__image'
import reducer__video from './reducer__video'
import reducer__window__size from './reducer__window__size'
import reducer_projects from './reducer__projetcs'
import reducer__contact from "./reducer__contact";
export default combineReducers({
    reducer__image,reducer__video,reducer__window__size,reducer_projects,reducer__contact,
})