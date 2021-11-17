function MiniCopyright(content) {
    this.content = content;
}

MiniCopyright.prototype = {
    init: function () {
        var copyright = document.createElement("span");
        copyright.innerHTML = this.content;

        var div = document.createElement("div");
        div.className = "markdown-body mini-copyright";
        div.appendChild(copyright);

        var hr = document.querySelector(".post-metas.mb-3").parentNode.previousElementSibling;
        hr.parentNode.insertBefore(div, hr);
    }
};