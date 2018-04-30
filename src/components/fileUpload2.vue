<style lang="css" scoped>



</style>

<template lang="html">

<div>
    <form id="formid">
        <label for="resource">上传文档</label>
        <input type="file" id="resource" name="resource" ref="resource">
        <button type="button" @click="upload()">上传</button>
    </form>
</div>

</template>

<script>

export default {
    methods: {
        upload() {
            var formData = new FormData() // FormData 对象
            formData.append('file', this.$refs.resource.files[0])
            this.$http.post('http://192.168.1.200:3001/api/upload/sina', formData, {
                method: 'post',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                transformRequest: [function(data) {
                    return data
                }],
                onUploadProgress: function(e) {
                    let percentage = Math.round((e.loaded * 100) / e.total) || 0
                    console.log(e, percentage)
                }
            }).then((response) => {
                if (response.data.status) {} else {
                    this.$Notice.error({
                        title: '错误',
                        message: response.data.imgId
                    })
                }
            }).catch(function(error) {
                console.log(error)
            })
        }
    }
}

</script>
