if(Dropzone) {
    Dropzone.prototype.defaultOptions.dictDefaultMessage = "拖动文件上传";
    Dropzone.prototype.defaultOptions.dictFallbackMessage = "你的浏览器不支持拖拽操作.";
    Dropzone.prototype.defaultOptions.dictFallbackText = "请使用老的上传表单.";
    Dropzone.prototype.defaultOptions.dictFileTooBig = "文件太大 ({{filesize}}MiB). 最大文件大小: {{maxFilesize}}MiB.";
    Dropzone.prototype.defaultOptions.dictInvalidFileType = "无效文件类型.";
    Dropzone.prototype.defaultOptions.dictResponseError = "服务器响应码 {{statusCode}} .";
    Dropzone.prototype.defaultOptions.dictCancelUpload = "取消上传";
    Dropzone.prototype.defaultOptions.dictCancelUploadConfirmation = "确认取消上传吗?";
    Dropzone.prototype.defaultOptions.dictRemoveFile = "移除文件";
    Dropzone.prototype.defaultOptions.dictMaxFilesExceeded = "你无法上传更多的文件了.";
}