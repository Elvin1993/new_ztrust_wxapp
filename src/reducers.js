import { combineReducers } from 'redux'

// 处理projects逻辑
const projects = (state = [], action) => {
  switch (action.type) {
    case "PROJECTS_LOADED":
      // state.concat[action.payload]
      return state.concat(action.payload)
    //other cases
  }
  return state
}

// 将多个reducer合并起来
// 这里就可以看出store的结构了, 是不是很 predictable ?
export default combineReducers({
  projects
})