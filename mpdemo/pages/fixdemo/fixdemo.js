Page({
    data:{
        fixTop:'',//区域离顶部的高度
        scrollTop:0,//滑动条离顶部的距离
    },
    onShow:function(){
        let self=this;
        wx.createSelectorQuery().select('.static-news').boundingClientRect(function(rect){
           self.setData({
               fixTop:rect.top,
           })
        }).exec()
    },
    onPageScroll:function(res){
        let self=this;
        let top=res.scrollTop;
        self.setData({
            scrollTop:top
        });
    }
})