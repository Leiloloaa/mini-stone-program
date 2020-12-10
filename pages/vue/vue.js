//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function() {

    },
    seeArticle(res) {
        wx.navigateTo({
            url: '../article/article?id=' + res.currentTarget.dataset.id + '&type=' + res.currentTarget.dataset.type
        })
    }
})