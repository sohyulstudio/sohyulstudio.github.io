const upload = document.getElementById('upload-original');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let originalImage, w, h;
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
            w = img.width / 2;
            h = img.height / 2;
            ctx.drawImage(img, 0, 0);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
});

document.getElementById('modify-center').addEventListener('click', function () {
    if (!originalImage) {
        alert("Please upload an image first.");
        return;
    }

    const square = parseInt(document.getElementById('square-size').value);

    const width = originalImage.width;
    const height = originalImage.height;

    // Create a temporary canvas to hold the modified image
    const newCanvas = document.createElement('canvas');
    newCanvas.width = width;
    newCanvas.height = height;
    const newCtx = newCanvas.getContext('2d');

    // Copy the original image into the new canvas
    newCtx.drawImage(originalImage, 0, 0);

    // Crop and rearrange the four parts
    const one = ctx.getImageData(w - square, h - square, square, square);
    const two = ctx.getImageData(w, h - square, square, square);
    const three = ctx.getImageData(w, h, square, square);
    const four = ctx.getImageData(w - square, h, square, square);

    // Place the rearranged pieces back onto the new canvas
    newCtx.putImageData(one, w, h - square); // Position 1
    newCtx.putImageData(two, w, h);          // Position 2
    newCtx.putImageData(three, w - square, h); // Position 3
    newCtx.putImageData(four, w - square, h - square); // Position 4

    // Clear the current canvas and display the result from newCanvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(newCanvas, 0, 0);
});
