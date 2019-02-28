document.addEventListener("DOMContentLoaded", function (event) {

    //Get Date
    let date = new Date();
    document.getElementById("date").innerHTML = date;

    //News data

    const data = [
        {
            id: 1,
            title: 'Title one',
            image: 'https://picsum.photos/1200/500/?random',
            description: 'Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam sagittis. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero. Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        }
    ]

    let title = document.createTextNode(data[0].title);
    document.getElementById('card-title').appendChild(title);

    let img = data[0].image

    document.getElementById('card-img-top').setAttribute('src', img)


    let description = document.createTextNode(data[0].description);
    document.getElementById('card-text').appendChild(description);

    //API RES

fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(res => {
    for(let i=0; i<3; i++){

        let div = document.createElement("div")
        let newText = document.createElement("p")
        let img = document.createElement('img')

        
        let id = res.data[i].id
        let name = res.data[i].first_name
        let surname = res.data[i].last_name
        let avatar = res.data[i].avatar
        
        div.className = "media"

        let idNode = document.createTextNode(id) 
        let nameNode = document.createTextNode(name)
        let surnameNode = document.createTextNode(surname)

         img.setAttribute('src', avatar)
        

        newText.appendChild(idNode)
        div.appendChild(newText)
        div.appendChild(nameNode)
        div.appendChild(surnameNode)
        div.appendChild(img)
        

        document.getElementById('news').append(div)
        
       
    }
})



})



