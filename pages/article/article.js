// // pages/article/article.js
// Page({

//     /**
//      * 页面的初始数据
//      */
//     data: {
//         goodsCount: 40,
//         img: '',
//         base64Img: '',
//         size:0
//     },
//     // 上传图片
//     chooseImg: function(e) {
//         const that = this
//         wx.chooseImage({
//             count: 1, // 默认9
//             sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
//             sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
//             success: function(res) {
//                 console.log(res)
//                 that.setData({
//                     size: res.tempFiles[0].size,
//                 })
//                 const tempFilePaths = res.tempFilePaths
//                 wx.getImageInfo({
//                     src: tempFilePaths[0],
//                     success: (res) => {
//                         console.log(res)
//                             //获得exif中的orientation信息   
//                         if (res.orientation == "up") {
//                             that.setData({
//                                 img: tempFilePaths[0],
//                             })
//                         } else {
//                             let canvasContext = wx.createCanvasContext('canvas')
//                             console.log(res.orientation)
//                             switch (res.orientation) {
//                                 case ("down"):
//                                     var width = res.width;
//                                     var height = res.height
//                                         //需要旋转180度
//                                     that.setData({
//                                         imageWidth: width,
//                                         imageHeight: height,
//                                     })
//                                     canvasContext.translate(width / 2, height / 2)
//                                     canvasContext.rotate(180 * Math.PI / 180)
//                                     canvasContext.drawImage(tempFilePaths[0], -width / 2, -height / 2, width, height);
//                                     break;
//                                 case ("left"):
//                                     var width = res.width;
//                                     var height = res.height;
//                                     canvasContext.translate(height / 2, width / 2)
//                                     that.setData({
//                                             imageWidth: height,
//                                             imageHeight: width,
//                                         })
//                                         //顺时针旋转270度
//                                     canvasContext.rotate(270 * Math.PI / 180)
//                                     canvasContext.drawImage(tempFilePaths[0], -width / 2, -height / 2, width, height);
//                                     break;
//                                 case ("right"):
//                                     var width = res.width;
//                                     var height = res.height;
//                                     that.setData({
//                                         imageWidth: height,
//                                         imageHeight: width,
//                                     })
//                                     canvasContext.translate(height / 2, width / 2)
//                                         //顺时针旋转90度
//                                     canvasContext.rotate(90 * Math.PI / 180)
//                                     canvasContext.drawImage(tempFilePaths[0], -width / 2, -height / 2, width, height);
//                                     break;
//                             }
//                             canvasContext.draw()
//                             that.drawImage()
//                         }
//                     }
//                 })
//             }
//         });
//     },

//     drawImage: function(path) {
//         var that = this;
//         setTimeout(() => {
//             // 将生成的canvas图片，转为真实图片
//             wx.canvasToTempFilePath({
//                 x: 0,
//                 y: 0,
//                 canvasId: 'canvas',
//                 success(res) {
//                     let shareImg = res.tempFilePath;
//                     that.setData({
//                         img: res.tempFilePath,
//                     })
//                     that.urlTobase64(res.tempFilePath)
//                 },
//                 fail: function(res) {}
//             })
//         }, 2000)
//     },

//     urlTobase64(imgPath) { //读取图片的base64文件内容
//         var that = this;
//         wx.getFileSystemManager().readFile({
//             filePath: imgPath, //选择图片返回的相对路径
//             encoding: 'base64', //编码格式
//             success: res => {
//                     console.log('data:image/png;base64,' + res.data);
//                     that.base64Img = res.data;
//                 } //成功的回调
//         })
//     },
//     previewImg: function(e) {
//         //获取当前图片的下标
//         var index = e.currentTarget.dataset.index;
//         //所有图片
//         var imgs = this.data.imgs;
//         wx.previewImage({
//             //当前显示图片
//             current: imgs[index],
//             //所有图片
//             urls: imgs
//         })
//     },

//     /**
//      * 生命周期函数--监听页面加载
//      */
//     onLoad: function(options) {

//     },

//     /**
//      * 生命周期函数--监听页面初次渲染完成
//      */
//     onReady: function() {

//     },

//     /**
//      * 生命周期函数--监听页面显示
//      */
//     onShow: function() {

//     },

//     /**
//      * 生命周期函数--监听页面隐藏
//      */
//     onHide: function() {

//     },

//     /**
//      * 生命周期函数--监听页面卸载
//      */
//     onUnload: function() {

//     },

//     /**
//      * 页面相关事件处理函数--监听用户下拉动作
//      */
//     onPullDownRefresh: function() {

//     },

//     /**
//      * 页面上拉触底事件的处理函数
//      */
//     onReachBottom: function() {

//     },

//     /**
//      * 用户点击右上角分享
//      */
//     onShareAppMessage: function() {

//     }
// })


// Page({
//     /**
//      * 页面的初始数据
//      */
//     data: {
//       devicePosition:'back',
//       authCamera: false,//用户是否运行授权拍照
//     },
//     handleCameraError:function() {
//       wx.showToast({
//         title:'用户拒绝使用摄像头',
//         icon: 'none'
//       })
//     },
//     reverseCamera:function(){
//       this.setData({
//         devicePosition: "back" === this.data.devicePosition ? "front" : "back"
//     });
//     },
//     takePhoto:function() {
//       //拍摄照片
//       wx.createCameraContext().takePhoto({
//         quality: 'high',//拍摄质量(high:高质量 normal:普通质量 low:高质量)
//         success: (res) => {
//           //拍摄成功
//           //照片文件的临时文件
//           var file = res.tempImagePath;
//           console.log(file)
//           //上传图片到服务器
//           wx.uploadFile({
//             url: 'XXXX', //上传服务器地址
//             filePath: file,
//             name: 'file',
//             formData: {
//               'test': 'test'
//             },
//             success: (res) => {
//               //上传成功
//             },
//             fail: function(t) {
//               //上传失败
//             },
//           })
//         },
//         fail: (res) => {
//           //拍摄失败
//         },
//       })
//     },
//     /**
//      * 生命周期函数--监听页面显示
//      */
//     onShow: function () {
//       wx.getSetting({
//         success: (res) => {
//             if (res.authSetting["scope.camera"]) {
//                 this.setData({
//                   authCamera:true,
//                 })
//             } else {
//               this.setData({
//                 authCamera:false,
//               })
//             }
//         }
//       });
//     },
//   })


Page({

    /**
     * 页面的初始数据
    */
  
    data: {
  
      src: '',//拍照后图像路径(临时路径)
      show: false//相机视图显示隐藏标识
  
    },
  
  
  
    // 取消/重新拍照按钮
    cancelBtn() {
      this.setData({//更新数据
        show: false
      })
    },
  
  
  
  
    // 点击拍照按钮
    takePhoto() {
  
      // 创建camera上下文CameraContext对象
      // 具体查看微信api文档
      const ctx = wx.createCameraContext()
  
      // 获取camera实时帧数据
      const listener = ctx.onCameraFrame((frame) => {
          //如果不需要则注释掉
      })
  
      // 实拍照片配置
      ctx.takePhoto({
  
          quality: 'high',//成像质量
  
          success: (res) => {//成功回调
            this.setData({
              src: res.tempImagePath,//tempImagePath为api返回的照片路径
              show: true
            })
          },
  
          fail: (error) => {//失败回调
            //友好提示...
          }
  
      })
    },
  
  
  
  
    // 保存图片/更改主页数据(用户最终点击确定按钮√)
    saveImg() {
  
      // 获取所有页面(不懂请移步下面这篇文章)
      // https://blog.csdn.net/weixin_44198965/article/details/107821802
      let pages = getCurrentPages()
  
      // 当前页面-flag
      var currentPage = '';
  
      // 上一页-flag
      var prevPage = '';
  
      // 如果长度大于等于2
      if(pages.length >= 2){//则对上面定义的flag赋值
  
        // 当前页
        currentPage = pages[pages.length - 1];
  
        // 上一页
        prevPage = pages[pages.length - 2];
      }
      
  
  
  
      // 刷新上一页(也就是主页面)数据-包含图片路径及标识
      if(prevPage) {
  
        // 获取当前图片路径(用户拍下的照片)
        var src = currentPage.data.src;
        
        // 动态更新数据(不懂移步文章)
        // https://blog.csdn.net/weixin_44198965/article/details/107821802 获取页面栈后 可以访问页面栈中的数据-这样达到的不同页面更新数据
        prevPage.setData({
            frontShow: false,//显示图片
            frontSrc: src//照片路径
        })
     }
  
      // 最后返回上一页(也就是主页)
      wx.navigateBack({
          delta: 1,
      })
    },
  
  
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
  
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