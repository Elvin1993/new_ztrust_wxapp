import {
  weapp,
  connect,
  bindActionCreators,
  store,
  actions
} from '../../lib/myapp'

// 标准Page定义Object
const config = {
  data: {
    hello: 123,
    projects: [] //for init-render
  },

  onReady(){
    // 哪里来的 loadProjects? 往下看
    this.loadProjects('octokit')
  },

  onStateChange(nextState){
    this.setData(nextState)
  }
}


// connect store with page
const projects = connect.Page(
  store(), // required
  // 这个页面只关注projects变化
  (state) => ({projects: state.projects}),

  // 将Action定义与Store.dispatch binding在一起, 这样就是一个可以发起对github API的请求了
  (dispatch) => {
    return {
      loadProjects: bindActionCreators(actions.loadProjects, dispatch)
    }
  }
)
// 启动被connect过的页面
Page(projects(config))