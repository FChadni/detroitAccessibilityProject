
'use strict';

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

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        // getDataDetail();
        getData();
    }
});


const searchResults = document.getElementById('searchResults');
const accessibilityFeature = document.getElementById('accessibilityFeature');
console.log(searchResults)
console.log(accessibilityFeature)

function getData() {
    searchResults.innerHTML = '';
    for (let i of venues) {
        const dataEl = document.createElement('div');
        dataEl.classList.add('resultItem');
        dataEl.innerHTML = `
            <div class="venueImage"><img src="${i.image}" alt=""></div>
            <div class="venueDetail">
                <div class="venueName">${i.venueName}</div>
                <div class="venueAddress">${i.address}</div>
        `
        accessibilityFeature.innerHTML = '';
        for(let j = 0; j<i.accessibility.length; j++) {
            const data = document.createElement('div');
            data.classList.add('accessibilityFeatureItem');
            data.innerHTML = `
                <div class="accessibilityIcon">X</div>
                <div class="accessibilityText">${i.accessibility[j]}</div>
            `
            let acc = accessibilityFeature.appendChild(data);
            // console.log(acc)
            // let x = searchResults.append(data);
            // console.log(searchResults.append(data))
            // searchResults.append(data);
            dataEl.innerHTML += acc.innerHTML;
        }
        searchResults.appendChild(dataEl);
    }

}

function getDataDetail(){
    // searchResults.innerHTML = '';
    // for (let i of venues) {
    //     for(let j = 0; j<i.accessibility.length; j++) {
    //         const data = document.createElement('div');
    //         data.classList.add('accessibilityFeatureItem');
    //         data.innerHTML = `
    //         <div class="accessibilityIcon">X</div>
    //         <div class="accessibilityText">${i.accessibility[j]}</div>
    //         `
    //         searchResults.appendChild(data);
    //     }
    // }
}

