// miniprogram/pages/order/order.js
Page({
  data: {
    address: {},
    hasAddress: false,
    total: 0,
    cartList:[],
    orderList:[]
  },

  onReady() {
    this.getTotalPrice();
    this.getD()
  },

  onShow: function () {
    const self = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })

  },
  getD: function () {
    wx.getStorage({
      key: 'key',
      success: (res) => {
        var orderList = this.data.orderList;
        orderList.push(res.data)
        this.setData({
          orderList: orderList
        })
        console.log(orderList)
      }
    })
  },
  /**
   * 计算总价
   */
  getTotalPrice: function () {
    let cartList = this.data.cartList;          // 获取购物车列表
    let total = 0;
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].checked == true) {
        total += cartList[i].count * cartList[i].price;
      }
    }
    this.setData({
      cartList: cartList,
      totalPrice: total.toFixed(2)
    });
  },

  toPay() {
    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付系统已屏蔽',
      text: 'center',
      complete() {
        wx.switchTab({
          url: ''
        })
      }
    })
  }
})