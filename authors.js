
//helper function to create an element
function createNode(element) {
    return document.createElement(element);
}

//helper function to append an element to its parent element
function append(parent, el) {
    return parent.appendChild(el);
}

//binding ul to the authors ID
const ul = document.getElementById('authors');
//API endpoint(GET)
const url = 'https://randomuser.me/api/?results=10';
//using fetch to call that endpoint(GET)
fetch(url)
//waiting for promise then turning promise into .json
.then((response) => response.json())
//then displaying certain data from the response
.then(function(data) {
    let authors = data.results; //authors is that json response.results, which is the name of the array
    //can you tell me exactly what .map() is doing here?
    return authors.map(function(author) {
        let li = createNode('li'),
            img = createNode('img'),
            p = createNode('p');
        img.src = author.picture.medium;
        p.innerHTML = `${author.name.first} ${author.name.last}`;
        append(li, img);
        append(li, p);
        append(ul, li);
    })
})
.catch(function(error) {
    console.log(error);
});   