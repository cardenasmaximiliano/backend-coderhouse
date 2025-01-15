let url = "https://api.escuelajs.co/api/v1/categories";

fetch(url)
    .then(response => response.json())
    .then(data =>
        console.log(data)
    )
    .catch(error => console.log(error))