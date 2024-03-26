const cone = document.querySelectorAll(".b"); 

const aryan = ['X', 'O'];

let current = aryan[0];


for (let i = 0; i < cone.length; i++) {
    cone[i].addEventListener('click', () => { 
        if (cone[i].textContent !== "") {
            return;
        }
        cone[i].textContent = current;
        if (current === aryan[0]) { 
            current = aryan[1];
        } else if (current === aryan[1]) { 
            current = aryan[0];
        }
    });
}

