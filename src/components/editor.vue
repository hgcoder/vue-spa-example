<template>
  <div class="app" id="app">
    <div class="c-tit">富文本编辑器</div>

   	<div class="t-wrap">
        <div class="c-tit1">Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
        访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
    </div>
        <quill-editor ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
export default {
  data () {
    return {
      content: '<p>Hello BBK</p>',
      editorOption: {
          // something config
      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorChange ({ editor, html, text }) {
      this.content = html
    },
    submit () {
      console.log(this.content)
      this.$message.success('提交成功！')
    }
  },
  computed: {
    editor () {
      return this.$refs.myTextEditor.quillEditor
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .t-wrap{
    height: 100%;
  }
</style>
