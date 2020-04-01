// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    msg:"传给了父组件"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    send:function(){
      this.triggerEvent("myEvent", { thisMsg: this.data.msg})
    }
  }
})
