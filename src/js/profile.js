document.getElementById('logout').addEventListener('click', function () {
    firebase.auth().signOut().then(function () {
        window.location.href = 'login.html#skip'
    }).catch(function (error) {
        console.log(error);
    });
    window.location.href = 'index.html#skip'
});

document.getElementById("savePfpEdit").style.display = "none";
document.getElementById('firstnametxtbx').disabled = true;
document.getElementById('lastnametxtbx').disabled = true;
document.getElementById('emailtxtbx').disabled = true;

document.getElementById('editBtn').addEventListener('click', function () {
    document.getElementById("savePfpEdit").style.display = "block";
    document.getElementById('firstnametxtbx').disabled = false;
    document.getElementById('lastnametxtbx').disabled = false;
    document.getElementById('emailtxtbx').disabled = false;
});

document.getElementById('savePfpEdit').addEventListener('click', function () {    
    document.getElementById("savePfpEdit").style.display = "none";
    document.getElementById('firstnametxtbx').disabled = true;
    document.getElementById('lastnametxtbx').disabled = true;
    document.getElementById('emailtxtbx').disabled = true;
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