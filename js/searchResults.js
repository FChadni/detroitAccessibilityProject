const searchResults = document.querySelector('.searchResults');
const accessibilityFeature = document.querySelector('.accessibilityFeature');
const readMoreBtn = document.querySelector('.readMore');
let currentIndex = 0

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
        console.log(venueResults)
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const searchValue = search.value.toLowerCase();

            localStorage.setItem("textvalue", searchValue);
            // window.document.location = './result.html'
            // const param = (new URL(document.location)).searchParams
            // const searchVal = param.get("textvalue");

            console.log(searchValue);
            venueFilter = venueResults.filter((ven, index) => {
                console.log(index)
                return (
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

const popupFunction = (venues) => {
    console.log(venues)
    readMoreBtn.addEventListener('click', () => {
        console.log("hello")
        showPopup(venues);
    })
    console.log("hello")
}

//function for showing popup box
const showPopup = (venue) => {
    // console.log(venue.name)
    let popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.closeBtn');

    // const venueSubName = document.querySelector('.venueSubName');

    popup.classList.remove('hide');
    closeBtn.addEventListener('click',() => {
        popup.classList.add('hide');
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