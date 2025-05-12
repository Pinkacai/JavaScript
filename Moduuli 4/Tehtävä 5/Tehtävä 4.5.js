'use strict'



async function joke() {
    const url ="https://api.chucknorris.io/jokes/random"
    try {
        const request = await fetch(url)
        const data = await request.json()
        console.log(data.value)
    } catch (err) {
        console.error("Error:", err);
    }
}
joke()