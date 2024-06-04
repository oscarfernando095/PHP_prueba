let contenedorPersonajes = document.getElementById('personajes')

fetch(`https://rickandmortyapi.com/api/character`)
.then((response)=> response.json())
.then((data)=>{
    console.log(data)

    data.results.map((elemento)=>{
        const contenedorCreado = document.createElement("div")

        contenedorCreado.innerHTML = `
        <h3>${elemento.name}</h3>
        <h4>${elemento.species}</h4>   
        <img src="${elemento.image}">
        
        `;

        contenedorPersonajes.append(contenedorCreado)
    })
})
/*
fetch(`https://api.disneyapi.dev/character`)
.then((response)=> response.json())
.then((data)=>{
    console.log(data)

    data.results.map((elemento)=>{
        const contenedorCreado = document.createElement("div")

        contenedorCreado.innerHTML = `
        <h4>${elemento.name}</h4>
        <img src="${elemento.imageUrl}">
        
        `;

        contenedorPersonajes.append(contenedorCreado)
    })
})*/
/*https://rickandmortyapi.com/api/character*/