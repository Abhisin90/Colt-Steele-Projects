const form = document.querySelector('#searchForm')

form.addEventListener('submit',async (e) => {
    e.preventDefault();
    const img = document.querySelectorAll('img');
    for(let im of img){
        im.remove()
    }
    const searchTerm = form.elements.query.value
    const config = {params: {q: searchTerm}}
    const res = await axios.get('https://api.tvmaze.com/search/shows',config)
    displayImage(res.data)
    form.elements.query.value = ""
    
}) 

const displayImage = (shows) => {
    for (let result of shows){
        if(result.show.image){
            const img = document.createElement('img')
            img.src = result.show.image.medium
            document.body.append(img)
        }
    }
} 