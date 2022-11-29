const body = document.querySelector('body');
const ul = document.createElement('ul');
body.appendChild(ul);
fetch('https://fakerapi.it/api/v1/books?_quantity=5')
    .then(respones => {
        return respones.json();
    })
    .then(finalData => {
        finalData.data.forEach(item => {
            const li = document.createElement('li');
            ul.appendChild(li);
            li.textContent = item.title +' | '+ item.author;
        });
    })