<template>
  <div class="app" id="app">
  	<div class="c-tit">文件上传</div>
   	<div class="t-wrap">
		<div class="c-tit1">来自 <a href="https://www.iviewui.com/components/upload">iview</a>自身上传组件</div>
   		<Upload
	        multiple
	        type="drag"
	        show-upload-list
	        action="//jsonplaceholder.typicode.com/posts/">
	        <div style="padding: 20px 0">
	            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
	            <p>点击或将文件拖拽到这里上传</p>
	        </div>
	    </Upload>
   	</div>
   	<div class="c-tit">图片剪切</div>
   	<div class="t-wrap">
      <div class="c-tit1">来自基于vue的 <a href="https://github.com/Vanthink-UED/vue-core-image-upload">vue-core-image-upload</a></div>
   		<img class="pre-img" :src="src" alt="">
      <vue-core-image-upload :class="['pure-button','pure-button-primary','js-btn-crop']"
                               :crop="true"
                               crop-ratio="1:1" 
                               text="上传图片"
                               url="/api/posts/"
                               extensions="png,gif,jpeg,jpg"
                               @:imageuploaded="imageuploaded"
                               @:errorhandle="handleError"></vue-core-image-upload>
    </div>
   	</div>
  </div>
</template>

<script>
import VueCoreImageUpload from 'vue-core-image-upload'
export default {
  name: 'dome1',
  data () {
    return {
      src: '../../../static/img/img.png',
      fileList: []
    }
  },
  components: {
    VueCoreImageUpload
  },
  methods: {
    imageuploaded (res) {
      console.log(res)
    },
    handleError () {
      this.$notify.error({
        title: '上传失败',
        message: '图片上传接口上传失败，可更改为自己的服务器接口'
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .pre-img{
        width:200px;
        height: 200px;
        margin-bottom: 20px;
        border-radius:50%;
        border: 2px solid rgba(0,0,0,.05);
    }
  .pure-button{
    width: 60px;
    height: 30px;
    line-height: 30px;
    background: #39f;
    text-align: center;
    color:#fff;
    border-radius: 3px;

  }
</style>
