// 引入request 模块
const {request}=require("../../utils/request.js");

//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    search: [],
    // 分类菜单数据
    menu: [],
    // 楼层菜单数据
    floor:[],
    //回到顶部距离
    showTop: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 请求轮播图数据
      this.getSliderData();
      // 请求分类菜单数据
      this.getMenuData();  
      // 请求楼层菜单数据
      this.getFloorData();
  },
  // 请求轮播图数据
  getSliderData(){
    const data = { url:"home/swiperdata"};
    request(data)
    .then(res => {
      // 绑定轮播图数据
      this.setData({
        search: res
      })
    })
  },
  // 请求分类菜单数据
  getMenuData() {
    const data = { url: "home/catitems" };
    request(data)
      .then(res => {
        this.setData({
          menu: res
        })
      })
  },
  // 请求楼层菜单数据
  getFloorData() {
    const data = { url: "home/floordata" };
    request(data)
      .then(res => {
        this.setData({
          floor: res
        })
      })
  },
  // 点击回到顶部事件
  toTop(e){
    // console.log(e);
    const {top}=e.currentTarget.dataset;
    wx.pageScrollTo({
      scrollTop: top,
      duration: 300
    })
  },
  // 监听用户滑动页面事件
  onPageScroll(e){
    // console.log(e);
    const {scrollTop}=e;
    if(scrollTop>200){
        this.setData({
          showTop:false
        })
        }else{
            this.setData({
                 showTop: true
            })
        }
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