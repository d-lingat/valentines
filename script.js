// Function to handle button click events

// Check which option chosen

function selectOption(option) {

    if (option === 'yes') {

        // Flashes rainbow colors

        flashRainbowColors(function() {

            // Hide the question

            document.getElementById('question').style.display = 'none';

            // Display cat heart gif

            displayCatHeart();

        }); // <-- Properly close flashRainbowColors callback

    } else if (option === 'no') {

        // Change "no" button to "You sure, pookie?"

        document.getElementById('no-button').innerText = 'You sure, pookie?';
        
        // Increase size of "Yes" button

        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        
        // Double font size

        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';

    } else {

        alert('PLEASSEEEEEEE BABY');
        
    }
}

// Function to flash rainbow colors and execute callback function

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;

    // Color changes every 200 milliseconds

    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;

    }, 200);

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';

        // Reset color
        
        if (callback) {
            callback();

        }
    }, 2000);

}

    // Function to display cat gif initially

function displayCat() {
    var imageContainer = document.getElementById('image container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

    // Function to display cat heart gif

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none';
    };
}

    // Display cat.gif initially

displayCat();
