

fetch('http://localhost:3000/beers')
    .then(function (response) {
        return response.json()
    }) //closes first then
    .then(function (beers) {
        beers.forEach(function (beer) {
            // console.log(beer)


            const listGroup = document.querySelector('#list-group')
            const beerLi = document.createElement('li')
            beerLi.setAttribute('class', 'list-group-item')
            beerLi.innerText = beer.name

            beerLi.addEventListener('click', function () {

                const beerDetail = document.querySelector('#beer-detail')

                const beerName = document.createElement('h1')
                const beerImg = document.createElement('img')
                const beerTag = document.createElement('h3')
                const beerDescrip = document.createElement('textarea')

                const button = document.createElement('button')
                button.setAttribute('id', 'edit-beer')
                button.setAttribute('class', 'btn btn-info')
                button.innerText = 'Save'
                button.addEventListener('click', function () {
                    fetch(`http://localhost:3000/beers/${beer.id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            description: beerDescrip.value
                        })
                    }) //closes fetch PATCH

                }) //closes EventListener (button)


                beerDetail.innerHTML = ""

                beerName.innerText = beer.name
                beerImg.src = beer.image_url
                beerTag.innerText = beer.tagline
                beerDescrip.innerText = beer.description


                beerDetail.append(beerName)
                beerDetail.append(beerImg)
                beerDetail.append(beerTag)
                beerDetail.append(beerDescrip)
                beerDetail.append(button)
            }) //close EventListener (beerLi)




            // listGroup.append(beerLi)

            listGroup.append(beerLi)
        }) //closes forEach
    }) //closes second then