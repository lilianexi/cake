// miniprogram/pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      detail:[],
      count:1,
      i:0,
      imgUrl:"",
      imgUrl1:"",
      imgUrl2:"",
      price:""
  },
  // 加入购物车
  addCart:function(e){
    var goods = this.data
    var nowCart = this.data.detail[0];
    var count=this.data.count
    nowCart.count=count
    //价格部分
    var price=this.data.price;
    var i=this.data.i
    price=nowCart.price[i]
    console.log(price)
    nowCart.price=price
   wx.setStorage({
      key: 'key',
     data: nowCart,
      success:(res)=>{
        console.log(res)
        wx.showToast({
          title: '添加成功',
          icon: "success",
          duration: 2000
        })
        return nowCart
      }
    })
  },
 
  //加号
  add:function(){
   var nowCount=this.data.count
   nowCount++;
   this.setData({
     count:nowCount
   })

  },
  //减号
  les:function(){
    var nowCount = this.data.count
    if (nowCount >1) { nowCount--;}
    else {nowCount=1}
    this.setData({
      count: nowCount
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  //重量选中
  changeone:function(){
      var newIndex=this.data.index;
      newIndex=0
    // let base64 = wx.getFileSystemManager().readFileSync("cloud://weeding-bcc904.7765-weeding-bcc904/mypic/ok2.png", 'base64');
      if(this.data.imgUrl==""){
      this.setData({
        i:newIndex,
        imgUrl: '../../images/ok2.png',
        imgUrl1:"",
        imgUrl2:""
      })
      }else{
        this.setData({
          imgUrl:""
        })
      }


  },
  changetwo:function() {
    var newIndex = this.data.index;
    newIndex = 1
    if (this.data.imgUrl1 == "") {
      this.setData({
        i: newIndex,
        imgUrl1: "../../images/ok2.png",
        imgUrl:"",
        imgUrl2:""
      })
    } else {
      this.setData({
        imgUrl1: ""
      })
    }
  },
  changethree:function() {
    var newIndex = this.data.index;
    newIndex = 2
    if (this.data.imgUrl2 == "") {
      this.setData({
        i: newIndex,
        imgUrl2: "../../images/ok2.png",
        imgUrl:"",
        imgUrl1:""
      })
    } else {
      this.setData({
        imgUrl2:""
      })
    }
  },
  //获取详情
  onLoad: function (options) {
    const db  = wx.cloud.database()
    db.collection('cakes').where({
      _id: options.id
    }).get({
      success: res => {
        this.setData({
         detail:res.data
        })
        // console.log(this.data.detail)
      }
    })
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