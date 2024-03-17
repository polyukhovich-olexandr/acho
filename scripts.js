function load_images(){
    var value = document.getElementById("input_numbers").value;
    var digits = value.toString().split('');
    var symbolsArray = [',', '.', 'e', '-', '+', 'E'];

    digits.forEach(function(digit) {
        if (symbolsArray.includes(digit)) {
            return; // Пропустити створення зображення, якщо символ входить до списку
        }

        var imgElement = document.createElement('img');
        imgElement.src = "./images/" + digit + ".gif"; // встановлення шляху до зображення
        imgElement.classList.add("rule34gif");
        document.body.appendChild(imgElement);
    });
}


function remove_images() {
    var images = document.querySelectorAll('.rule34gif');
    images.forEach(function(img) {
        img.parentNode.removeChild(img);
    });
}

function load_when_change(){
    document.getElementById("input_numbers").addEventListener("input", function() {
        remove_images();
        load_images();
    });
}