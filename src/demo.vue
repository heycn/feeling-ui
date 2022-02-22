<template>
  <div style="margin: 20px">
    {{ error }}
    <br />
    {{ fileList }}
    <div>只能上传 300kb 以内的 png、jpeg 文件</div>
    <f-uploader
      accept="image/*"
      method="POST"
      action="http://127.0.0.1:3000/upload"
      name="file"
      @upload:fileList="y"
      :parseResponse="parseResponse"
      :file-list.sync="fileList"
      @error="error = $event"
      :size-limit="1024 * 1024"
    >
      <f-button icon="upload">上传</f-button>
    </f-uploader>
  </div>
</template>

<script>
  import FUploader from './uploader'
  import FButton from './button/button'

  export default {
    name: 'demo',
    components: { FUploader, FButton },
    data() {
      return {
        fileList: [],
        error: ''
      }
    },
    methods: {
      alert(error) {
        window.alert(error || '上传失败')
      },
      parseResponse(response) {
        let object = JSON.parse(response)
        let url = `http://127.0.0.1:3000/preview/${object.id}`
        return url
      },
      y(newFileList) {
        this.fileList = newFileList
      }
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: white;
  }
</style>
<style scoped lang="scss"></style>
