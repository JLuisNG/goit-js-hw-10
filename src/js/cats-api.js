
function fetchCatByBreed(breed, elmHTML, errorHTML, loaderHTML){
    console.log(breed)
    fetch(`https://api.thecatapi.com/v1/images/search?&breed_ids=${breed}`,
    {
        headers: {
            "x-api-key": "live_QWSSN5WiRmCPLvVKTI32dq3YGqOMWivZEZDJ7tEct8nW4suFFwjT1KMIiVzb7acZ"
        }
    })
        .then(result => result.json())
        .then(data => {
            console.log(data[0].url)
            elmHTML.innerHTML = `
            <section class="cat">            
                <img src=${data[0].url} width="350px"/>
                <div class="info">                
                    <div>            
                        <h2>${data[0].breeds[0].name}</h2>
                        <p>${data[0].breeds[0].description}</p>
                    </div>
                    <div class="temperament">
                        <p><span class="subtitle">temperament:</span> ${data[0].breeds[0].temperament}</p>
                    </div>
                </div>
            </section>
            `;
        })
        .catch(()=>{
            const cat = document.querySelector('.cat')
            errorHTML.classList.remove('hidden')
            cat.remove()
        })
        .finally(
            loaderHTML.classList.add('hidden')
        )
}
export {fetchCatByBreed}