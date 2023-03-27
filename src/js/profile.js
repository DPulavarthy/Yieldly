document.getElementById('logout').addEventListener('click', function() {
    firebase.auth().signOut().then(function() {
        window.location.href = 'login.html#skip'
    }).catch(function(error) {
        console.log(error);
    });
    window.location.href = 'index.html#skip'
});

document.getElementById('editBtn').addEventListener('click', function() {
    const firstname = document.getElementById('#firstname'),
    lastname = document.getElementById('#lastname'),
    email = document.getElementById('#email'),
    location = document.getElementById('#location');

    alert("testing");

});

document.getElementById('dataBtn').addEventListener('click', _ => {
    window.location.href = 'data.html'
});
document.getElementById('calcBtn').addEventListener('click', _ => {
    window.location.href = 'calc.html'
});
document.getElementById('marketBtn').addEventListener('click', _ => {
    window.location.href = 'market.html'
});

fetch('http://ip-api.com/json')
            .then(response => response.json())
            .then(data => {
                const city = data.city;
                const state = data.regionName;
                document.getElementById('location').textContent = city + ", " + state;
            })
            .catch(error => {
                console.error(error);
            });