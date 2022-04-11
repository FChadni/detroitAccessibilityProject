const searchResults = document.querySelector('.searchResults');

searchResults.style.display = "flex"
searchResults.style.flexDirection = "column"

let venueResults = [];

const loadVenues = async () => {
    try{
        const res = await fetch('https://dap-project-api.herokuapp.com/venues');
        venueResults = await res.json();
        displayVenues(venueResults);
    } catch (err) {
        console.log(err);
    }
};

const displayVenues = (venues) => {
    const htmlString = venues
        .map((venue) => {
        return `
            <div class="resultItem">
                <div class="resultSubItem">
                    <div class="venueImage">${venue.image}</div>
                    <div class="venueDetail">
                        <div class="venueName">${venue.name}</div>
                        <div class="venueAddress">${venue.address}</div>
                        <div id="accessibilityFeature" class="accessibilityFeature">
                            <div class="accessibilityFeatureItem">
                                <div class="accessibilityIcon">X</div>
                                <div class="accessibilityText">${venue.accessibility}</div>
                            </div>
                        </div>
                    <div><button class="readMore" id="readBtn" type="button" aria-label="Read More Button">Read More</button></div>
                </div>
            </div>
        `
    }).join('');
    searchResults.innerHTML = htmlString;
};


loadVenues()

// search.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         getData();
//     }
// })
// Fetching the one day weather Api
// function getData() {
//     fetch(`https://dap-project-api.herokuapp.com/venues`)
//         .then(data => {
//             return data.json();
//         }).then(displayResults);
// }
//
// let searchResults = document.getElementById('searchResults');
//
// function displayResults(data){
//     console.log(data[0].name);
//
//     let venueName = document.querySelector('.venueName');
//     let venueAddress = document.querySelector('.venueAddress');
//     searchResults.innerHTML = '';
//     for (let i = 0; i<data.length; i++){
//         venueName.innerHTML += `${data[i].name}`
//         searchResults.appendChild(venueName);
//     }
// }
//
// getData();

// document.addEventListener("readystatechange", (event) => {
//     if (event.target.readyState === "complete") {
//         // getDataDetail();
//         getData();
//     }
// });
//
//
// const searchResults = document.getElementById('searchResults');
// const accessibilityFeature = document.getElementById('accessibilityFeature');
// console.log(searchResults)
// console.log(accessibilityFeature)
//
// function getData() {
//     searchResults.innerHTML = '';
//     accessibilityFeature.innerHTML = '';
//     for (let i of venues) {
//         const dataEl = document.createElement('div');
//         dataEl.classList.add('resultItem');
//         dataEl.innerHTML = `
//             <div class="venueImage"><img src="${i.image}" alt=""></div>
//             <div class="venueDetail">
//                 <div class="venueName">${i.venueName}</div>
//                 <div class="venueAddress">${i.address}</div>
//         `
//         // accessibilityFeature.innerHTML = '';
//         for(let j = 0; j<i.accessibility.length; j++) {
//             const data = document.createElement('div');
//             data.classList.add('accessibilityFeatureItem');
//             data.innerHTML = `
//                 <div id="accessibilityFeature" class="accessibilityFeature">
//                     <div class="accessibilityFeatureItem">
//                         <div class="accessibilityIcon">X</div>
//                         <div class="accessibilityText">${i.accessibility[j]}</div>
//                     </div>
//                 </div>
//             `
//             accessibilityFeature.appendChild(data);
//             // console.log(acc)
//             // let x = searchResults.append(data);
//             // console.log(searchResults.append(data))
//             // searchResults.append(data);
//             // dataEl.innerHTML += acc.innerHTML;
//         }
//         searchResults.appendChild(dataEl);
//     }
//
// }
//
// function getDataDetail(){
//     // searchResults.innerHTML = '';
//     // for (let i of venues) {
//     //     for(let j = 0; j<i.accessibility.length; j++) {
//     //         const data = document.createElement('div');
//     //         data.classList.add('accessibilityFeatureItem');
//     //         data.innerHTML = `
//     //         <div class="accessibilityIcon">X</div>
//     //         <div class="accessibilityText">${i.accessibility[j]}</div>
//     //         `
//     //         searchResults.appendChild(data);
//     //     }
//     // }
// }

