export const setSearchFocus = () => {
    document.getElementById("search").focus();
}

export const showClearTextButton = () => {
    const search = document.getElementById("search");
    const clear = document.getElementById("clear");
    if (search.value.length) {
        clear.classList.remove("none");
        clear.classList.add("flex");
    } else {
        clear.classList.add("none");
        clear.classList.remove("flex");
    }
};

export const clearSearchText = (event) => {
    event.preventDefault();
    document.getElementById("search").value = "";
    const clear = document.getElementById("clear");
    clear.classList.add("none");
    clear.classList.remove("flex");
    setSearchFocus();
};

export const clearPushListener = (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        document.getElementById("clear").click();
    }
};





// const createSearchBar = () => {
//     let searchbar = document.querySelector('.container');
//
//     searchbar.innerHTML += `
//         <div class="title">
//             <h1>Detroit Accessibility Project</h1>
//         </div>
//         <form class="searchBox">
//             <div class="searchBar">
//                 <i class="fas fa-magnifying-glass searchIcon"></i>
//                 <!-- ##### Search bar input box ##### -->
//                 <label><input type="text" class="search" id="search"
//                               placeholder="Search for accessibility resources, theatres, or venues in Detroit">
//                 </label>
//                 <!-- ##### search and mic icons inside the search box ##### -->
//                 <button id="micBtn"><i class="fas fa-microphone micIcon"></i></button>
//             </div>
//
//             <div class="searchButton">
//                 <button type="button" id="searchBtn">Search</button>
//             </div>
//         </form>
//     `
// }
// createSearchBar();

