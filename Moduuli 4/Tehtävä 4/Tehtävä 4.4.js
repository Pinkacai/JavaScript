const form = document.querySelector("form");
const input = document.querySelector("#query");

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    document.getElementById("results").innerHTML = ""

    const searchTerm = input.value;
    const url = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        for (let i = 0; i<data.length;i++){
        let name = data[i].show.name
        let page = data[i].show.url
        let sum = data[i].show.summary
        const createcont = document.getElementById("results")
        const createEl = document.createElement("article")
        const pageName = document.createElement("h2")
        const link = document.createElement("a")
        const image = document.createElement("img")
        const Ssummary = document.createElement("div")

        createEl.appendChild(pageName)
        createEl.appendChild(image)
        createEl.appendChild(Ssummary)
        createEl.appendChild(link)

        pageName.innerHTML = `<h2>${name}</h2>`;
        link.innerHTML = `<a href="${page}" target="_blank">${page}</a>`
        if (data[i].show.image) {
        image.src = data[i].show.image.medium;
        image.alt = `${name}`;
        }else {
            image.src = "https://dummyimage.com/600x400/aba2ab/fff&text=Image+not+found"
        }
        Ssummary.innerHTML = `<div>${sum}</div>`

        createcont.appendChild(createEl);
        }

    } catch (err) {
        console.error("Error:", err);
    }
});
