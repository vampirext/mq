<template>
  <div>
    <div class="tab-bar" font>
      <image class="tab-img-0" src="local:///shadow3"></image>
      <text :class="['tab-icon-1', active1 ? 'active': '' ]" @click="page1">&#xe667;</text>
      <text :class="['tab-text-1', active1 ? 'active': '' ]" @click="page1">日记</text>
      <text :class="['tab-icon-2', active2 ? 'active': '' ]" @click="page2">&#xe6e1;</text>
      <text :class="['tab-text-2', active2 ? 'active': '' ]" @click="page2">预约</text>
      <image class="tab-img-3" src="local:///plus" resize="contain"></image>
      <text :class="['tab-icon-4', active3 ? 'active': '' ]" @click="page3">&#xe6e0;</text>
      <text :class="['tab-text-4', active3 ? 'active': '' ]" @click="page3">案例</text>
      <!-- <text class="tab-icon-5" style='font-family:iconfont;font-size:40;'>&#xe6e2;</text>
       可以把style中的内容写到class中 -->
      <text :class="['tab-icon-5', active4 ? 'active': '' ]" @click="page4">&#xe6e2;</text>
      <text :class="['tab-text-5', active4 ? 'active': '' ]" @click="page4">我的</text> 
    </div>
  </div>
</template>
<style>
  .tab-bar{
    width:750px;
    height:100px;
    position:absolute;
    bottom:0;
    padding-top:10;
    /* background-color: gray; */
  }
  .tab-img-0{
    width:750px;
    height:100px;
    position:absolute;
    left:0;
    bottom:0;
  }
  .tab-icon-1{
    font-size:40px;
    font-family:iconfont;
    position:absolute;
    left:55px;
    bottom:24px;  
  }
  .tab-icon-2{
    font-size:40px;
    font-family:iconfont;
    position:absolute;
    left:205px;
    bottom:24px;
  }
  .tab-img-3{
    width:150px;
    height:60px;
    position:absolute;
    left:300px;
  }
  .tab-icon-4{
    font-size:40px;
    font-family:iconfont;
    position:absolute;
    left:505px;
    bottom:24px;
  }
  .tab-icon-5{
    font-size:40px;
    font-family:iconfont;
    position:absolute;
    left:655px;
    bottom:24px;
  }
  .tab-text-1{
    font-size:24px;
    position:absolute;
    left:50px;
    color:#8a8a8a;
    bottom:0;
  }
  .active{
    color:#1296db;  
  }
  .tab-text-2{
    font-size:24px;
    position:absolute;
    left:200px;
    color:#8a8a8a;
    bottom:0;
  }
  .tab-text-4{
    font-size:24px;
    position:absolute;
    left:500px;
    color:#8a8a8a;
    bottom:0;
  }
  .tab-text-5{
    font-size:24px;
    position:absolute;
    left:650px;
    color:#8a8a8a;
    bottom:0;
  }
</style>
<script>
//export default与module.exports属于不同的两种语法规范，同时使用冲突
//   export default{
//     data(){
//       return{
//         active:false
//       }
//     },
//     methods:{
//       page1(){
//         this.active=true
//       }
//     }
//   }
//   module.exports = {
//         beforeCreate() {
//         var domModule = weex.requireModule('dom');
//         //目前支持ttf、woff文件，不支持svg、eot类型,moreItem at http://www.iconfont.cn/
//         domModule.addRule('fontFace', {
//             'fontFamily': "iconfont",
//             'src': "url('http://at.alicdn.com/t/font_668071_4x4nzm1ahkr442t9.ttf')"
//         });
//     }
// }
  const modal = weex.requireModule('modal');
  const domModule = weex.requireModule('dom');
  export default{
    data(){
      return{
        active1:false,
        active2:false,
        active3:false,
        active4:false
      }
    },
    created () {
        modal.toast({message:"1111"})
        domModule.addRule('fontFace', {
          'fontFamily': "iconfont",
          'src': "url('http://at.alicdn.com/t/font_668071_4x4nzm1ahkr442t9.ttf')"
        });
    },
    methods:{
      page1(){
        this.active1=true;
        this.active2=false;
        this.active3=false;
        this.active4=false;
      },
      page2(){
        this.active1=false;
        this.active2=true;
        this.active3=false;
        this.active4=false;
      },
      page3(){
        this.active1=false;
        this.active2=false;
        this.active3=true;
        this.active4=false;
      },
      page4(){
        this.active1=false;
        this.active2=false;
        this.active3=false;
        this.active4=true;
      }
    }
  }
  

</script>