const searchResults = document.querySelector('.searchResults');
const readMoreBtn = document.querySelector('.readMore');
const popup = document.querySelector('.popup');

searchResults.style.display = "flex"
searchResults.style.flexDirection = "column"

const search = document.querySelector("input");
const form= document.querySelector("form");
let venueResults = [];
let popup1 = [];


const loadVenues = async () => {
    try{
        const res = await fetch('https://dap-project-api.herokuapp.com/venues');
        venueResults = await res.json();


        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const searchValue = search.value.toLowerCase();
            let venueFilter = venueResults.filter((ven) => {
                return(
                    ven.name.toLowerCase().includes(searchValue) ||
                    ven.address.toLowerCase().includes(searchValue) ||
                    ven.description.toLowerCase().includes(searchValue) ||
                    ven.category.toLowerCase().includes(searchValue)
                );
            });
            displayVenues(venueFilter);
            popupFunction(venueFilter);
        });
    } catch (err) {
        console.log(err);
    }
};

const showPopup = (venues) => {
    console.log(venues)
    const htmlString = venues
        .map((venue) => {
            return `
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
                    <div class="venueSubImage"><img src="images/image.png" alt="image"></div>
                </div>
            </div>
        `
        }).join('');
    popup1.innerHTML = htmlString;

    const closeBtn = document.querySelector('.closeBtn');

    popup.classList.remove('hide');
    closeBtn.addEventListener('click',() => {
        popup.classList.add('hide');
    })
}

//function for showing popup box
const popupFunction = (venues) => {
    readMoreBtn.addEventListener('click', () => {
        console.log("hello")
        showPopup(venues);
    })
}

const displayVenues = (venues) => {
    console.log(venues)
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
                                     ${venue.accessibility.map(v => v).map(v => v)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div><button class="readMore" id="readBtn" type="button" aria-label="Read More Button" 
                onclick="showPopup();">Read More</button></div>
            </div>
        `
        }).join('');
    searchResults.innerHTML = htmlString;
};


loadVenues()