// pages/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatar: [
            'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
            'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg',
            'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
            'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'
        ],
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
        h: '00',
        m: '00',
        s: '00'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.queryTime()
    },
    onUnload() {},

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

    },

    queryTime() {
        const that = this
        let hou = that.data.h
        let min = that.data.m
        let sec = that.data.s
        setInterval(() => {
            sec++

            if (sec >= 60) {
                sec = 0
                min++
                if (min >= 60) {
                    min = 0
                    hou++
                    that.setData({
                        h: (hou < 10 ? '0' + hou : hou)
                    })
                } else {
                    that.setData({
                        m: (min < 10 ? '0' + min : min)
                    })
                }
            } else {
                that.setData({
                    s: (sec < 10 ? '0' + sec : sec)
                })
            }
        }, 60000)
    },

    toVue() {
        wx.navigateTo({
            url: '../vue/vue',
        })
    }
})