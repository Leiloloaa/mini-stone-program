// pages/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        targetTime: 0,
        clearTimer: false,
        avatar: [
            'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
            'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
            'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
            'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'
        ],
        floorGoods: [],
        openAttr: false,
        showChannel: 0,
        showBanner: 0,
        showBannerImg: 0,
        goodsCount: 40,
        banner: [],
        index_banner_img: 0,
        userInfo: {},
        imgurl: '',
        sysHeight: 0,
        loading: 0,
        autoplay: true,
        cardCur: 0,
        swiperList: [{
            id: 0,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
        }, {
            id: 1,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
        }, {
            id: 2,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
        }, {
            id: 3,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
        }, {
            id: 4,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
        }, {
            id: 5,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
        }, {
            id: 6,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
        }],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.setData({
            targetTime: new Date().getTime() + 86430000,
        });
    },
    onUnload() {
        this.setData({
            clearTimer: true
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})