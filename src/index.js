fetch('http://localhost:3000/beers')
    .then(function(response){
        return response.json()
    })
    .then(function(beers){
        
        beers.forEach(function(beer){
            const li = document.createElement('li')
            document.querySelector("#list-group").append(li)
            li.append(beer.name)
            li.addEventListener('click', function(e){
                fetch(`http://localhost:3000/beers/${beer.id}`)
                    .then(function(response){
                        return response.json()
                    })
                    .then(function(details){
                        console.log(details)
                        const li = document.createElement('li')
                        document.querySelector('#beer-detail').append(li)
                        li.append(beer.name)
                        const image = document.createElement('img')
                        image.setAttribute('src', beer.image_url)
                        document.querySelector('#beer-detail').append(image)
                        const tagline = document.createElement('div')
                        tagline.append(beer.tagline)
                        document.querySelector('#beer-detail').append(tagline)

                        const commentForm = document.createElement('form')
                        const commentInput = document.createElement('input')
                        const saveButton = document.createElement('button')

                        commentInput.placeholder = `${beer.brewers_tips}`
                        saveButton.append("Save")

                        commentForm.append(
                            commentInput,
                            saveButton
                        )

                        document.body.append(commentForm)

                        commentForm.addEventListener('submit', function(e){
                            e.preventDefault()
                                fetch(`http://localhost:3000/beers/${beer.id}`)
                                    method: "PATCH"
                                    headers: {
                                        'Content-Type'; 'application/json'
                                        'Accept'; 'application/json'
                                    }
                                    body:JSON.stringify({
                                        comment: commentInput.value
                                    })
                            })
                                    .then(function(response){
                                        return response.json
                                    })
                                    .then(function(comment){

                                    })
                        
                    })
            })
        })
    })