const api = "https://rickandmortyapi.com/api/character";

async function get() {
    try {
    const response = await fetch (api);
    const data = await response.json();
    const dataResult = data.results
    const header = document.querySelector(".header");
    header.innerHTML += `
    <select onchange = "getcharacter(this.value)">
    <option>Please Select</option>
    ${dataResult.map(m =>`<option>${m.name}</option>`)}
    </select>
    `
    }catch(e) {
        document.write(e)
    }
}
async function getcharacter(name) {
    if(name != "Please Select") {
        const response = await fetch(`${api}/?name=${name}`);
        const data = await response.json();
        const dataResult = data.results;
        const paragraphs = document.querySelectorAll("p")
        document.querySelector("h2").textContent = `Name: ${dataResult[0].name}`;
        document.querySelector(".species").textContent = `species: ${dataResult[0].species}`;
        document.querySelector(".gender").textContent = `gender: ${dataResult[0].gender}`;
        document.querySelector(".location").textContent = `location: ${dataResult[0].location.name}`;
        // adding status 
        if (dataResult[0].status === "Alive") {
            document.querySelector(".status").innerHTML = `status: <span class="alive">${dataResult[0].status}</span>`;
        }else if (dataResult[0].status === "Dead") {
            document.querySelector(".status").innerHTML = `status: <span class="dead">${dataResult[0].status}</span>`;
        }else {
                    document.querySelector(".status").innerHTML = `status: ${dataResult[0].status}`;
        }
        document.querySelector("img").src = dataResult[0].image;
        // adding border bottom
        paragraphs.forEach(paragraph => {
            paragraph.style.borderBottom = '1px solid #35c9dd';
        });
    }
}
get()
// #35c9dd

/* <span class"life"></span> */
