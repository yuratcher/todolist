import Vue from 'vue'

export default {
  SET_ACTIVE_TYPE: (state, { type }) => {
    state.activeType = type
  },

  SET_LIST: (state, { type, ids }) => {
    state.lists[type] = ids
  },

  SET_ITEMS: (state, { items }) => {
    items.forEach(item => {
      if (item) {
        Vue.set(state.items, item.id, item)
      }
    })
  },

  SET_USER: (state, { id, user }) => {
    Vue.set(state.users, id, user || false) /* false means user not found */
  },

  GET_NEW_ITEM: (state, { data, id }) => {
      const dat = Object.assign(data, { mysuperid: id });
      Vue.set(state.item, id, dat)
  },
  GET_ERROR_ITEM: (state, { id }) => {
    const data = {
       login:"NO THIS USER!!!",
       id:0,
       avatar_url:"http://toilettissuespray.com/wp-content/uploads/2017/10/Screen-Shot-2017-10-07-at-7.36.34-PM.png",
       html_url:"",
       type:"",
       name:"",
       public_repos:0,
       followers:0,
       following:0,
       created_at:"0000-00-03T05:34:03Z",
       mysuperid:id
     };
      Vue.set(state.item, id, data)
  },
  SET_MOUNT_ITEM: (state) => {
      const data = {
       login:"",
       id:0,
       avatar_url:"http://polishsouls.com/img/placeholderfemale.jpg",
       html_url:"",
       type:"",
       name:"",
       public_repos:0,
       followers:0,
       following:0,
       created_at:"0000-00-00T05:34:03Z",
       mysuperid:0
     }
     Vue.set(state.item, 0, data);
      const dat = {
       login:"",
       id:0,
       avatar_url:"http://polishsouls.com/img/placeholderfemale.jpg",
       html_url:"",
       type:"",
       name:"",
       public_repos:0,
       followers:0,
       following:0,
       created_at:"0000-00-00T05:34:03Z",
       mysuperid:1
     }
     Vue.set(state.item, 1, dat);
  },

}
