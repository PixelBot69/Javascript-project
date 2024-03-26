const container = document.querySelector(".container");
const button = document.querySelector(".color");

async function random() {
    try {
        const response = await fetch(`https://api.quotable.io/random`);
        const data = await response.json();
        const quote = data.content;
        const author = data.author;
        console.log(quote);

        displayQuote(quote, author);
    } catch(error) {
        console.error("Error fetching quote:", error);
    }
}

function displayQuote(quote, author) {
    container.innerHTML = `
        <p>${quote}</p>
        <p>${author}</p>
    `;
}


random();


button.addEventListener("click", random);
