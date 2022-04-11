const searchResults = document.querySelector('.searchResults');
const accessibilityFeature = document.querySelector('.accessibilityFeature');

searchResults.style.display = "flex"
searchResults.style.flexDirection = "column"

let venueResults = [];


const loadVenues = async () => {
    try{
        const res = await fetch('https://dap-project-api.herokuapp.com/venues');
        venueResults = await res.json();
        console.log(venueResults)
        displayVenues(venueResults);
        // displayVenuesAccessibility(venueResults);
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

// <div className="accessibilityFeatureItem">
//     ${venue.accessibility.join("<li>")}
// </div>
// <div className="accessibilityIcon">X</div>
// <div className="accessibilityText">${venue.accessibility.join("<li>")}</div>

const displayVenuesAccessibility = (venues) => {
    console.log(venues[0])
    const m = venues[0]
    const m1 = m.accessibility;
    const m2 = m1.map(v => v);
    const m3 = m2.map(v => '<li>' + v + '</li>');
    console.log(m3)
    const htmlstr = venues.map((venue) => {
        venue.accessibility.map((v => {
            `
                <div class="accessibilityFeatureItem">
                    <div class="accessibilityIcon"></div>
                    <ul class="accessibilityText">${v}</ul>
                </div>
            `
        }))
    }).join('');
    accessibilityFeature.innerHTML = htmlstr;
    console.log(accessibilityFeature.innerHTML);
};

loadVenues()


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

