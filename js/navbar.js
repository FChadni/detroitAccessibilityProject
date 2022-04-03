const createNavBar = () => {
    let navbar = document.querySelector('.navbar');

    navbar.innerHTML += `
        <div class="navbar_container">
            <div class="navbar_toggle" id="mobile_menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <div class="logo"></div>
            <ul class="navbar_menu">
                <li class="navbar_item">
                    <a href="../index.html" class="navbar_links">HOME</a>
                </li>
                <li class="navbar_item">
                    <a href="../venue.html" class="navbar_links">VENUE</a>
                </li>
                <li class="navbar_item">
                    <a href="../about.html" class="navbar_links">ABOUT</a>
                </li>
            </ul>
        </div>
    `
}
createNavBar()