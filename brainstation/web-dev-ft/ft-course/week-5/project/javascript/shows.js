const promise = fetch(baseUrl + pathShowDates + queryString);

promise.then((response) => {
    return response.json();
}).then((data) => {
    // Code will be refactored in future development
    document.getElementById('row__one__date').innerHTML = data[0].date;
    document.getElementById('row__one__location').innerHTML = data[0].location;
    document.getElementById('row__one__venue').innerHTML = data[0].place;

    document.getElementById('row__two__date').innerHTML = data[1].date;
    document.getElementById('row__two__location').innerHTML = data[1].location;
    document.getElementById('row__two__venue').innerHTML = data[1].place;

    document.getElementById('row__three__date').innerHTML = data[2].date;
    document.getElementById('row__three__location').innerHTML = data[2].location;
    document.getElementById('row__three__venue').innerHTML = data[2].place;

    document.getElementById('row__four__date').innerHTML = data[3].date;
    document.getElementById('row__four__location').innerHTML = data[3].location;
    document.getElementById('row__four__venue').innerHTML = data[3].place;

    document.getElementById('row__five__date').innerHTML = data[4].date;
    document.getElementById('row__five__location').innerHTML = data[4].location;
    document.getElementById('row__five__venue').innerHTML = data[4].place;

    document.getElementById('row__six__date').innerHTML = data[5].date;
    document.getElementById('row__six__location').innerHTML = data[5].location;
    document.getElementById('row__six__venue').innerHTML = data[5].place;    
});