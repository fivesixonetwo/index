

//--------------------------------------------------------------------------------------
//change color background
/*var color = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000",
    "#00FFFF", "#008080", "#0000FF", "#000080", "#FF00FF", "#800080"];
    */
var color = ["#FFFFFF", "#000000"]
var i = 0;
document.querySelector("button").addEventListener("click", function () {
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i]
})

//--------------------------------------------------------------------------------------
//editor
ClassicEditor
    .create(document.querySelector('#editor'))
    .catch(error => {
        console.error(error);
    });

CKEDITOR.editorConfig = function (config) {
    // misc options
    config.height = '500px';
};