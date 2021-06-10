
const state={
    visitedTagViews:[]
}

const mutations={
    /**
     *
     * @param state
     * @param payload 形如{ title,path,}
     */
    addTagView(state,payload){
        if (state.visitedTagViews.some(v => v.path === payload.path)) return
        state.visitedTagViews.push(
          Object.assign({}, payload, {
              title: payload.meta.title || 'no-name'
          })
        )
    }
}

export default {
    state,
    mutations
}
