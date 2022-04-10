
export const getSearchTerm = () =>{
    const rawSearchTerm = document.getElementById("search").value.trim();
    console.log(rawSearchTerm);
    const regex = /[ ]{2,}/gi;
    const searchTerm = rawSearchTerm.replaceAll(regex, " ");
    return searchTerm
}
getSearchTerm()

// export const retrieveSearchResults = (searchTerm) => {
//     const searchString = getSearchString(searchTerm);
//     let resultArray = [];
//     for (let i of venues){
//         if(i.venueName.includes(searchString) || i.address.includes(searchString)){
//             resultArray = processResults(venues)
//         }
//     }
//     return resultArray;
// }

// const processResults = (resluts) => {
//     const resultArray = [];
//     for (let i of resluts){
//         const img = i.image
//         const name = i.venueName;
//         const address = i.address;
//         const access = i.accessibility;
//         const item = {
//             img : i.image,
//             name : i.venueName,
//             address: i.address,
//             access : i.accessibility
//         };
//         resultArray.push(item);
//     }
//     return resultArray;
// }