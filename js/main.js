let venues = {
    data:[{
        venueName: "Arab American National Museum",
        address: "13624 Michigan Ave, Dearborn, MI 48126",
        category: "Museum",
        accessibility: ["Entrance","Parking","Restroom"],
        image: "../images/image.png"
    },
    {
        venueName: "Comerica Park",
        address: "2100 Woodward Ave, Detroit, MI 48201",
        category: "Park",
        accessibility: ["ALT Format","Parking","Wheelchair"],
        image: "../images/image.png"
    },
    {
        venueName: "Comerica Park",
        address: "2100 Woodward Ave, Detroit, MI 48201",
        category: "Park",
        accessibility: ["ALT Format","Parking","Wheelchair"],
        image: "../images/image.png"
    }]
}
console.log(venues)
document.getElementById('searchBtn').addEventListener('click', ()=>{
    let searchT = document.getElementById('search').value;
    if (searchT)
        getData(searchT);
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
})

const main = document.getElementById('main');
// const accessibilityFeature = document.getElementById('accessibilityFeature')
// const search = document.getElementById('search');
// search.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         getData();
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
        <div class="venuePhoto">
            <img src="images/image.png" alt="Image">
        </div>
        <div class="venueDetail">
            <div class="subtitle">${i.venueName}</div>
            <div class="address"><p>${i.address}</p></div>
            `
        for(let j = 0; j<i.accessibility.length; j++) {
            var acc1 = `
            <div class="accessibilityText">${i.accessibility[j]}</div>
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

getData()

// main.style.display = "grid"
// main.style.gridTemplateColumns = "33% 33% 33%"
//
// const result = document.querySelector('.results')
// result.style.display = "block"
// result.style.width = "33%"