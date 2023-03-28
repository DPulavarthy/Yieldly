/////////////////////////////////////////////////////////////////////////////////////////////////////
//              NAV BAR

document.getElementById('dataBtn').addEventListener('click', _ => {
    window.location.href = 'data.html'
});
document.getElementById('marketBtn').addEventListener('click', _ => {
    window.location.href = 'market.html'
});
document.getElementById('profileBtn').addEventListener('click', _ => {
    window.location.href = 'profile.html'
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
//              Crop Type

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");
const optionsList = document.querySelectorAll(".option");
const startDateBox = document.getElementById("startDate");
const harvestDateBox = document.getElementById("harvestDate");


selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    
    startDateBox.style.display = "none";
    harvestDateBox.style.display = "none";
    
    searchBox.value = "";
    filterList("");
    if(optionsContainer.classList.contains("active")) {
        searchBox.focus();
    }
    if(!(optionsContainer.classList.contains("active"))) {
        startDateBox.style.display = "block";
        harvestDateBox.style.display = "block";
    }
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");

        startDateBox.style.display = "block";
        harvestDateBox.style.display = "block";
    });
});

searchBox.addEventListener("keyup", function (e) {
    filterList(e.target.value);
});

const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach(option => {
        let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
            
        } else {
            option.style.display = "none";
            
        }
    });
};

    /////////////////////////////////////////////////////////////////////////////////////////////////////

    //                                          Restart Button

document.getElementById('restartBtn').addEventListener('click', _ => {
    // selected.innerHTML = "Select crop";
    // searchBox.value = "";
    // optionsList.forEach(option => {
    //     option.style.display = "none";
    // });

    // document.getElementById("startDateInput").value = "";
    // document.getElementById("harvestDateInput").value = "";
    window.location.reload();
});


/////////////////////////////////////////////////////////////////////////////////////////////////////

//                                          Save Info for Calculator

const calculateBtn = document.getElementById("calculatePrice");
calculateBtn.addEventListener('click', _ => {

    window.localStorage.setItem('selectedCrop', selected.innerHTML);
    window.localStorage.setItem('selectedStartDate', document.getElementById('startDateInput').value);
    window.localStorage.setItem('selectedHarvestDate', document.getElementById('harvestDateInput').value);
    
//  window.localStorage.getItem('selectedCrop'); -> to get items from local storage
    window.location.href = 'yield.html';
});