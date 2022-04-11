const searchResults = document.querySelector('.searchResults');
const accessibilityFeature = document.querySelector('.accessibilityFeature');

searchResults.style.display = "flex"
searchResults.style.flexDirection = "column"

const search = document.querySelector("input");
const form= document.querySelector("form");
let venueResults = [];

// window.addEventListener('load', () => {
//
// })

const loadVenues = async () => {
    try{
        const res = await fetch('https://dap-project-api.herokuapp.com/venues');
        venueResults = await res.json();
        console.log(venueResults)
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const searchValue = search.value.toLowerCase();

            localStorage.setItem("textvalue", searchValue);
            // window.document.location = './result.html'
            // const param = (new URL(document.location)).searchParams
            // const searchVal = param.get("textvalue");

            console.log(searchValue);
            const venueFilter = venueResults.filter((ven) => {
                return(
                    ven.name.toLowerCase().includes(searchValue) ||
                    ven.address.toLowerCase().includes(searchValue) ||
                    ven.description.toLowerCase().includes(searchValue) ||
                    ven.category.toLowerCase().includes(searchValue)
                );
            });
            displayVenues(venueFilter);
        });
    } catch (err) {
        console.log(err);
    }
};

const displayVenues = (venues) => {
    console.log(venues)
    const htmlString = venues
        .map((venue) => {
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
                <div><button class="readMore" id="readBtn" type="button" aria-label="Read More Button">Read More</button></div>
            </div>
        `
        }).join('');
    searchResults.innerHTML = htmlString;
};

loadVenues()