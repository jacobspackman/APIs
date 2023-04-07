const button = document.querySelector('button')

const pressBtn = () => {
    axios.get("https://swapi.dev/api/planets/?search=ald")
    .then(response => {
        for (let i=0; i<response.data.results.residents.length; i++){
            axios.get(response[i]).then(response => {
                const newName = document.createElement('h2')
                newName.textContent = `${response.data.name}`
                document.body.appendChild(newName)
            })
        }
    }
       
    )

}

button.addEventListener('click', pressBtn)
