/////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  NAV BAR

document.getElementById('dataBtn').addEventListener('click', _ => {
    window.location.href = 'data.html'
});
document.getElementById('calcBtn').addEventListener('click', _ => {
    window.location.href = 'calc.html'
});
document.getElementById('marketBtn').addEventListener('click', _ => {
    window.location.href = 'market.html'
});
document.getElementById('profileBtn').addEventListener('click', _ => {
    window.location.href = 'profile.html'
});


/////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById('cropTypeTitleBox').innerHTML = localStorage.getItem('selectedCrop');
document.getElementById("startTxtBx").innerHTML = localStorage.getItem('selectedStartDate');
document.getElementById("endTxtBx").innerHTML = localStorage.getItem('selectedHarvestDate');


document.getElementById("restartYPBtn").addEventListener("click", _ => {
    window.location.href = 'calc.html';
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
//                              Yield Calcualtor

