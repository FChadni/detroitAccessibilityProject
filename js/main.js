
// import {setSearchFocus, showClearTextButton, clearSearchText, clearPushListener} from "./searchBar.js";
// import {deleteSearchResults, clearStatsLine, setStatsLine} from "./searchResults.js";
// import { getSearchTerm} from "./dataFunctions.js";

let venues = [
    {
        venueName: "Arab American National Museum",
        address: "13624 Michigan Ave, Dearborn, MI 48126",
        category: "Museum",
        accessibility: ["Entrance", "Parking", "Restroom"],
        image: "./images/image.png"
    },
    {
        venueName: "Comerica Park",
        address: "2100 Woodward Ave, Detroit, MI 48201",
        category: "Park",
        accessibility: ["ALT Format", "Parking", "Wheelchair"],
        image: "./images/image.png"
    },
    {
        venueName: "Comerica Park",
        address: "2100 Woodward Ave, Detroit, MI 48201",
        category: "Park",
        accessibility: ["ALT Format", "Parking", "Wheelchair"],
        image: "./images/image.png"
    }
]

console.log(venues)

// Check if everything on the page is loaded before interacting on the web
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    // set the focus
    setSearchFocus();
    //
    // // //3 listener clear text
    const search = document.getElementById("search");
    search.addEventListener("input", showClearTextButton);
    const clear = document.getElementById("clear");
    // // //
    clear.addEventListener("click", clearSearchText);
    clear.addEventListener("keydown", clearPushListener);
    //
    //
    const form = document.getElementById("searchForm");
    form.addEventListener("submit", submitTheSearch);

    const searchTerm = getSearchTerm();
    console.log(searchTerm)
};

const submitTheSearch = (event) => {
    event.preventDefault();
    // delete search reslut
    deleteSearchResults();
    //process the search
    // processTheSearch();
    //set the focus
    setSearchFocus();
};

initApp()

// Procedural
const processTheSearch = async () => {
    clearStatsLine();
    //get search term
    const searchTerm = getSearchTerm();
    // if (searchTerm === "") return; //TODO:
    // const resultArray = await retrieveSearchResults(searchTerm);
    // if (resultArray.length) buildSearchResults(resultArray);
    setStatsLine(resultArray.length);
};
