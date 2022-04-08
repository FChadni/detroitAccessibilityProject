let venues = [
    {
        venueName: "Arab American National Museum",
        address: "13624 Michigan Ave, Dearborn, MI 48126",
        category: "Museum",
        accessibility: ["Entrance","Parking","Restroom"],
        image: "./images/image.png"
    },
    {
        venueName: "Comerica Park",
        address: "2100 Woodward Ave, Detroit, MI 48201",
        category: "Park",
        accessibility: ["ALT Format","Parking","Wheelchair"],
        image: "./images/image.png"
    },
    {
        venueName: "Comerica Park",
        address: "2100 Woodward Ave, Detroit, MI 48201",
        category: "Park",
        accessibility: ["ALT Format","Parking","Wheelchair"],
        image: "./images/image.png"
    }
]
console.log(venues)

// Search functionality
const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
console.log(search)
search.addEventListener('keypress', (e) => {
// searchBtn.addEventListener('click', (e) => {
    // if (e.key === 'Enter') {
        const searchString = e.target.value.toLocaleString();
        console.log(searchString)
        for (let i of venues){
            if(i.venueName.toLowerCase().includes(searchString) || i.address.toLowerCase().includes(searchString)){
                console.log("if stste")
                return displayVan();
            }
        }
        // venues.filter((i) => {
        //     if(i.venueName.toLowerCase().includes(searchString) || i.address.toLowerCase().includes(searchString)){
        //         console.log("if stste")
        //         displayVan();
        //     }
        // });
        // return displayVan(filteredChar);
    // }
});

const main = document.getElementById('main');
const displayVan = () => {
    const htmlString = venues.map((i) =>{
        return `
            <div class="results">
                <div class="venue-photo">
                    <img src="${i.image}" alt="image">
                </div>
                <div class="venue-detail">
                    <div class="venue-name">${i.venueName}</div>
                    <div class="venue-address"><p>${i.address}</p></div>
                </div>
            </div>
        `
    }).join('');
    main.innerHTML = htmlString;
    console.log(htmlString)
}
// displayVan()








// document.getElementById('searchBtn').addEventListener('click', ()=>{
//     let searchT = document.getElementById('search').value;
//     if(search.value.length) {
//         location.href = `/result.html/${search.value}`;
//         getData(searchT);
//     }
    // let element = document.querySelectorAll('.subtitle');
    // let result = document.querySelectorAll('.results');
    // console.log(searchT);
    //
    // element.forEach((element,index) =>{
    //     if(element.innerTEXT.includes(searchT)){
    //         result[index].classList.remove("hide");
    //     }
    //     else{
    //         result[index].classList.add("hide");
    //     }
    // })
// })

// const main = document.getElementById('main');
// const accessibilityFeature = document.getElementById('accessibilityFeature')

// const search = document.getElementById('search');
// search.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         console.log("hello");
//         if(search.value.length){
//             location.href = `/result.html/${search.value}`;
//             console.log("hello2");
//         }
//     }
// })

function access() {
    let x = "";
    // for (let i of venues.data) {
    for (let j of venues.data.accessibility) {
        x= j;
        console.log(x);
    }
    // }
    // console.log(x);
    // return x;
}
function getData() {
    main.innerHTML = '';
    // accessibilityFeature.innerHTML = '';
    for (let i of venues.data) {
        const {venueName, address, accessibility} = venues
        const dataEl = document.createElement('div');
        dataEl.classList.add('results');
        // const data1El = document.createElement('div');
        // data1El.classList.add('accessibilitySubFeature');
        // for(let j = 0; j<i.accessibility.length; j++) {
        dataEl.innerHTML = `
        <div class="venue-photo">
            <img src="images/image.png" alt="Image">
        </div>
        <div class="venue-detail">
            <div class="venue-name">${i.venueName}</div>
            <div class="venue-address"><p>${i.address}</p></div>
            `
        for(let j = 0; j<i.accessibility.length; j++) {
            var acc1 = `
            <div class="accessibility-text">${i.accessibility[j]}</div>
            `
            main.innerHTML += acc1;
        }
            `
        </div>
        <div class="readMore">
                    <button id="readBtn">Read More</button>
        </div>
        `
        // }
        main.appendChild(dataEl);
            // accessibilityFeature.appendChild(data1El);
        // for(let j = 0; j<i.accessibility.length; j++) {
        //     var acc = `
        //     <div class="accessibilityText">${i.accessibility[j]}</div>
        //     `
        //     main.innerHTML += acc;
        // }

        // main.appendChild(dataEl);

        // accessibilityFeature.innerHTML = '';
        // for (let j = 0; j<i.accessibility.length; j++){
        //     console.log(i.accessibility[j])
        //     const dataEl = document.createElement('div');
        //     dataEl.classList.add('accessibilitySubFeature');
        //     dataEl.innerHTML = `
        //         <div class="accessibilityIcon"><i class="fas fa-microphone"></i></div>
        //         <div class="accessibilityText">${i.accessibility[j]}</div>
        //     `
        // }
        // main.appendChild(dataEl);
        // for(let j=0; j<i.accessibility.length; j++){
        //     var access = `
        //         <div class="accessibilityIcon"><i class="fas fa-microphone"></i></div>
        //         <div class="accessibilityText">${i.accessibility[j]}</div>
        //     `
        //     accessibilityFeature.innerHTML += access;
        // }

    }
}
// getData();
