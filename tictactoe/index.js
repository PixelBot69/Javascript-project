const cone = document.querySelectorAll(".b"); // Use querySelectorAll to select all elements with class "b"

const aryan = ['X', 'O'];

let current = aryan[0];

// Iterate over each element in cone
for (let i = 0; i < cone.length; i++) { // Changed ',' to ';' and fixed '<=' to '<'
    cone[i].addEventListener('click', () => { // Changed 'click' to 'click' (string)
        if (cone[i].textContent !== "") { // Changed '!=' to '!==' for strict comparison
            return;
        }
        cone[i].textContent = current;
        if (current === aryan[0]) { // Changed '.textContent' to 'current' for comparison
            current = aryan[1];
        } else if (current === aryan[1]) { // Changed '.textContent' to 'current' for comparison
            current = aryan[0];
        }
    });
}

