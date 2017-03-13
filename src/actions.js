import weapp from 'weapp-next'

const {Http} = weapp(wx)
// 更好的方法是定义一个api module, 来处理网络请求
const http = Http('https://api.github.com')

// 这是一个异步action, redux-thunk会处理返回值为Function的action(可以编入绕口令大全了~~)
 const loadProjects = (org) => {
  return (dispatch) => {

    http.get(`/orgs/${org}/repos`).then(response => {
      // 让store去广播'PROJECTS_LOADED'这件事情发生了
      dispatch({
        type: 'PROJECTS_LOADED',
        payload: response.data
      })
    })
  }
}
export default {loadProjects};