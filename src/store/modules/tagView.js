
const state={
    visitedTagViews:[]
}

const mutations={
    addTagView(state){
        state.visitedTagViews.push("a")
    }
}

export default {
    state,
    mutations
}
