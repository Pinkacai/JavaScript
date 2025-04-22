const form = document.querySelector("form");
const input = document.querySelector("#query");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const searchTerm = input.value;
    const url = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error("Error:", err);
    }
});