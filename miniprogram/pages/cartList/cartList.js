// miniprogram/pages/cartList/cartList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[],
    selected:false,
    totalPrice:0
  },
  //单选
  select:function(e){
    var index = e.currentTarget.dataset.index
    var cartList = this.data.cartList;
    if (cartList[index].checked == false)
    cartList[index].checked=true;
    else { cartList[index].checked = false;}
    this.setData({
      cartList: cartList
    })
    this.getTotalPrice()
  
  },
  //全选
  selectAll:function(e){
    var index = e.currentTarget.dataset.index
    var cartList = this.data.cartList;
    var selected=this.data.selected;
    if(selected==false){selected=true}
    else {selected=false}
    for (let i = 0; i < cartList.length; i++) {
      cartList[i].checked = selected;            // 改变所有商品状态
    }
    this.setData({
      selected: selected,
      cartList: cartList
    });
    this.getTotalPrice()
  },
  //加号
  add: function (e) {
    var index = e.currentTarget.dataset.index
    var cartList=this.data.cartList;
    console.log(cartList)
    //购物车数量
    var nowCount = cartList[index].count
    nowCount++;
    cartList[index].count=nowCount
    this.setData({
     cartList:cartList
    })
    this.getTotalPrice()
  },
  //减号
  les: function (e) {
    var index = e.currentTarget.dataset.index
    var cartList = this.data.cartList;
    var nowCount = cartList[index].count
    if (nowCount > 1) { 
      nowCount--; 
      cartList[index].count = nowCount
      }
    else { nowCount = 1 }
    this.setData({
      cartList: cartList
    })
    this.getTotalPrice()
  },
  //删除
  deleteList:function(e) {
    console.log(1)
    var index=e.currentTarget.dataset.index;
    let cartList=this.data.cartList;
    console.log(cartList)
    cartList.splice(index,1)
    this.setData({
      cartList:cartList
    })
    this.getTotalPrice()
  },
  //总价
  getTotalPrice:function() {
    let cartList = this.data.cartList;  
    console.log(cartList)            // 获取购物车列表
    let total = 0;
    for (let i = 0; i < cartList.length; i++) {         
      if (cartList[i].checked==true) {                  
        total += cartList[i].count * cartList[i].price;    
      }
      console.log(total)
    }
    this.setData({                          
      cartList: cartList,
      totalPrice: total.toFixed(2)
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    // console.log(123)
  
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
    wx.getStorage({
      key: 'key',
      success: (res) => {
        var list = this.data.cartList;
        for(var i=0;i<list.length;i++){
          if(list[i]._id==res.data._id){
            list[i].count = list[i].count+1;
          }else{
            list.push(res.data)
          }
        }
          list.push(res.data)
        this.setData({
          cartList: list
        })

      }
    })

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