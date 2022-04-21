
const searchResults = document.querySelector('.searchResults');
const accessibilityFeature = document.querySelector('.accessibilityFeature');
const readMoreBtn = document.querySelector('.readMore');
let currentIndex = 0
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".closeBtn");

searchResults.style.display = "flex"
searchResults.style.flexDirection = "column"

const search = document.querySelector("input");
const form= document.querySelector("form");
let venueResults = [];
let venueFilter = [];

const loadVenues = async () => {
    try{
        const res = await fetch('https://dap-project-api.herokuapp.com/venues');
        venueResults = await res.json();
        displayVenues(venueResults);
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const searchValue = search.value.toLowerCase();
            console.log(searchValue);
            venueFilter = venueResults.filter((ven, index) => {
                return (
                    ven.name.toLowerCase().includes(searchValue) ||
                    ven.address.toLowerCase().includes(searchValue) ||
                    ven.description.toLowerCase().includes(searchValue) ||
                    ven.category.toLowerCase().includes(searchValue)
                );
            });
            displayVenues(venueFilter);
            console.log(venueFilter);
        });
    } catch (err) {
        console.log(err);
    }
};

console.log(venueResults)

const popupFunction = (venues) => {
    console.log("colsol",venues)
    readMoreBtn.addEventListener('click', () => {
        let popup = document.querySelector('.popup');
        const closeBtn = document.querySelector('.closeBtn');

        // const venueSubName = document.querySelector('.venueSubName');

        popup.classList.remove('hide');
        closeBtn.addEventListener('click',() => {
            popup.classList.add('hide');
        })
    })
}

//function for showing popup box
const showPopup = (venue) => {
    let popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.closeBtn');

    popup.classList.remove('hide');
    closeBtn.addEventListener('click',() => {
        popup.classList.add('hide');
    })
}

const displayVenues = (venues) => {
    const htmlString = venues
        .map((venue,index) => {
            return `
            <div class="resultItem">
                <div class="resultSubItem">
                    <div class="venueImage"><img src="./images/image.png" alt="venue photo"></div>
                    <div class="venueDetail">
                        <div class="venueName">${venue.name}</div>
                        <div class="venueAddress">${venue.address}</div>
                        <div id="accessibilityFeature" class="accessibilityFeature">
                            <div class="accessibilityFeatureItem">
                                <ul class="accessibilityText">
                                     ${venue.accessibility.map((i) =>
                                            `<li>${i}</li>`
                                        )}
                                </ul>
                            </div>
                        </div>
                        <div class="readMoreBtn"><button class="readMore" id="readBtn" type="button" aria-label="Read More Button" 
                        onclick="displayVenuesDetails();">Read More</button></div>
                    </div>
                </div>
            </div>
        `
        }).join('');
    searchResults.innerHTML = htmlString;
};

function getVen(e){
    e.preventDefault();
    if(e.target.classList.contains('readMore')){
        fetch(`https://dap-project-api.herokuapp.com/venues`)
            .then(response => response.json())
            .then(data => displayVenuesDetails(data));
    }
}

const displayVenuesDetails = (ven) => {
    let popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.closeBtn');

    let html = ven.map((venue) => {
        return `
            <button class="closeBtn">X</button>
            <a href="#" class="linkBtn">LINK</a>
            <div class="venuePopupInfo">
                <div class="venueMainInfo">
                    <div class="venueSubName">${venue.name}</div>
                </div>
                <div class="venueSubInfo">
                    <div class="venueDescription">
                        <div class="venueSubAddress">${venue.address}</div>
                        <div class="venuePhone">${venue.phone}</div>
                        <p class="venueDes">${venue.description}</p>
                    </div>
                    <div class="venueSubImage"><img src="./images/image.png" alt="image"></div>
                </div>
            </div>
        `
    })
    popup.innerHTML = html;

    popup.classList.remove('hide');
    closeBtn.addEventListener('click',() => {
        popup.classList.add('hide');
    })
}

loadVenues();



