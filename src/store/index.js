import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex);



export default new vuex.Store({
    state: {
      arr:[
        {id:1,name:'iissoffware',score:80},
        {id:2,name:'isdfsd',score:50},
        {id:3,name:'2cxvdsfware',score:70}
      ]
    },
    getters: {
        arrList:(state)=>{
          return state.arr.map((item)=>{
            return item.score>=60?'及格':'不及格'
          })
        },
        arrGetter:state=>state.arr
    },
    mutations: {
        setArrAdd:(state,index)=>{
          state.arr[0].score+=index;
        },
        setArrReduce:(state,index)=>{
          state.arr[0].score-=index;
        }
    },
    actions:{
      increment({commit},data){
        console.log('jjl');
        setTimeout(()=>{
          commit('setArrAdd',data)
        },5000)
      }
    }
  }
)
