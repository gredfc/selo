var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://pt94.grepolis.com', true);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(xhr.responseText);
    }
};

var data = {name: 'Thegiantdragon', email: 'ggreed999p@gmail.com'};
xhr.send(JSON.stringify(data));
