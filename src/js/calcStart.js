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

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
    document.getElementById("startDate").style.display = "none";
    document.getElementById("harvestDate").style.display = "none";

    searchBox.value = "";
    filterList("");
    if(optionsContainer.classList.contains("active")) {
        searchBox.focus();
    }
    if(!(optionsContainer.classList.contains("active"))) {
        document.getElementById("startDate").style.display = "block";
        document.getElementById("harvestDate").style.display = "block";
    }
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
        document.getElementById("startDate").style.display = "block";
        document.getElementById("harvestDate").style.display = "block";
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