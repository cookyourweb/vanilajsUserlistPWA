function createNode(element) {
    return document.createElement(element); 
}

function append(parent, el) {
    return parent.appendChild(el); 
}

const ul = document.getElementById('testtakers');

fetch('testtakers.json')
    .then(response => response.json())
    //iterate over users
    .then(data => {
        let testtakers = data;
        //create the elments
        return testtakers.map(function(user) {
            let li = createNode('li')
                img = createNode('img'),
                span = createNode('span');
            img.src = user.picture;
            li.innerHTML = user.firstname;
            span.innerHTML = user.email;
        //append all elements
            append(li, img);
            append(li, span);
            append(ul, li);

        });
    })
