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

            const selectInput = document.getElementById('select');
            selectInput.max = img.width;
            selectInput.value = Math.min(selectInput.value, img.width); 
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
});


function updateCanvas() {
    if (!originalImage) {
        alert("Please upload an image first.");
        return;
    }

    const stretch = parseInt(document.getElementById('stretch').value);
    const select = parseInt(document.getElementById('select').value);

    const width = originalImage.width;
    const height = originalImage.height;

    const newWidth = width + stretch;
    canvas.width = newWidth;
    canvas.height = height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(originalImage, 0, 0, select, height, 0, 0, select, height);

    ctx.drawImage(originalImage, select, 0, 1, height, select, 0, stretch, height);

    ctx.drawImage(originalImage, select + 1, 0, width - select - 1, height, select + stretch, 0, width - select - 1, height);
}

document.getElementById('stretch').addEventListener('input', updateCanvas);
document.getElementById('select').addEventListener('input', updateCanvas);
