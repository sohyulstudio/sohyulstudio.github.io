const upload = document.getElementById('upload-original');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let originalImage;

upload.addEventListener('change', function (e) {
    const reader = new FileReader();
    reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
            originalImage = img;
            document.getElementById('original-image').src = event.target.result;
            document.getElementById('original-image').style.display = 'block';
            document.getElementById('original-container').classList.add('image-uploaded');
            document.getElementById('result-container').classList.add('image-uploaded');
            canvas.width = img.width; 
            canvas.height = img.height;
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
});

document.getElementById('apply-changes').addEventListener('click', function () {
    if (!originalImage) {
        alert("Please upload an image first.");
        return;
    }

    //control panel parameters
    const distance = document.getElementById('distance').value;
    const size = document.getElementById('size').value;

    const width = originalImage.width;
    const height = originalImage.height;

    const newWidth = Math.floor(width / distance) * size;
    const newHeight = Math.floor(height / distance) * size;

    canvas.width = newWidth;
    canvas.height = newHeight;

    //canvas modifications
});

