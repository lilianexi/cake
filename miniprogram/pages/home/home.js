// miniprogram/pages/home/home.js
const app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    list: [] , //保存轮播图
    cake:[],
    epic:[],
    title: "",
    title_en: "",
    url: ''
  },
  handleJump: function (e) {
    //1:获取自定义属性
    var id = e.target.dataset.id;
    //2:判断条件 1
    if (id!=null) {
      wx.navigateTo({
        url: "/pages/details/details?id="+id
      });
    }
    //3:跳转
  },
  onQuery: function (){
    const db = wx.cloud.database()
    db.collection('cakes').where({
      banner:"1"
    }).get({
        success: res => {
          this.setData({
          list:res.data
          })
        }
      })
  },
  loadConent:function(){
    const db = wx.cloud.database()
    db.collection('cakes').where({
     cake: 1
    }).get({
      success: res => {
        this.setData({
         cake:res.data
        })
      }
    })
  },
  loadCake: function () {
    const db = wx.cloud.database()
    db.collection('cakes').where({
      cake: 2
    }).get({
      success: res => {
        this.setData({
          epic: res.data
        })
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onQuery()
    this.loadConent()
    this.loadCake()
 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})