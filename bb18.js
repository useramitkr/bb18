let contBtn = document.querySelectorAll(".add-btn");
let resultBtn = document.getElementById("result");
let resultImg = document.getElementById("result-image");
let selectedImage = [];

// Event listener for contestant buttons
contBtn.forEach(button => {
    button.addEventListener('click', function () {
        const imageSrc = this.getAttribute('data-iamge'); // Correct attribute fetching

        if (selectedImage.includes(imageSrc)) {
            // Remove image if already selected
            selectedImage = selectedImage.filter(image => image !== imageSrc);
            this.textContent = "Add";
            this.classList.remove('remove');
            this.classList.add('add');
        } else {
            // Add image to selected list
            selectedImage.push(imageSrc);
            this.textContent = "Remove";
            this.classList.remove('add');
            this.classList.add('remove');
        }

        // Show or hide the result button based on selections
        if (selectedImage.length > 0) {
            resultBtn.classList.remove('hidden');
        } else {
            resultBtn.classList.add('hidden');
        }
    });
});

// Event listener for result button
resultBtn.addEventListener('click', function () {
    if (selectedImage.length > 0) {
        const randomIndex = Math.floor(Math.random() * selectedImage.length);
        resultImg.src = selectedImage[randomIndex];
    }

    // Reset selections
    selectedImage = [];
    contBtn.forEach(button => {
        button.textContent = "Add";
        button.classList.remove('remove');
        button.classList.add('add');
    });

    // Hide the result button
    resultBtn.classList.add('hidden');
});
