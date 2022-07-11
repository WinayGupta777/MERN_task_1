
let textArea = document.getElementById("editorBox");
let previewArea = document.getElementById("previewBox");

function onCodeChange() {
    console.log(textArea.value);
    previewArea.innerHTML = textArea.value;
}
