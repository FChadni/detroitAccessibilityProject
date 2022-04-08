const createSearchBar = () => {
    let searchbar = document.querySelector('.container');

    searchbar.innerHTML += `
        <div class="title">
            <h1>Detroit Accessibility Project</h1>
        </div>
        <form class="searchBox">
            <div class="searchBar">
                <i class="fas fa-magnifying-glass searchIcon"></i>
                <!-- ##### Search bar input box ##### -->
                <label><input type="text" class="search" id="search"
                              placeholder="Search for accessibility resources, theatres, or venues in Detroit">
                </label>
                <!-- ##### search and mic icons inside the search box ##### -->
                <button id="micBtn"><i class="fas fa-microphone micIcon"></i></button>
            </div>

            <div class="searchButton">
                <button type="button" id="searchBtn">Search</button>
            </div>
        </form>
    `
}
createSearchBar();

