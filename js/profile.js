const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const profileId = urlParams.get('id')

function profileLoading() {
let getLocalData = JSON.parse(localStorage.getItem("localData"));

const savedFilter = getLocalData.profile.filter ((item) => item.userid === profileId)
const MaptheFilter = savedFilter.map((item) => {
    if (item.loggedIn === true){
        item.loggedIn = "online"
    }else {
        item.loggedIn = "offline"
    }
    return `
    <div class="user-thumb"><img src="${item.user.picture.thumbnail}"></div>
    <div class="user-name"><strong>Name : </strong>${item.user.name.first} ${item.user.name.last}</div>
    <div class="forteam"> <strong>Team : </strong> ${item.team}</div>
    <div class="Id-No"><strong>User-Id : </strong> ${item.userid}</div>
    <div class="forjobdetail"> <strong>Job : </strong> ${item["job-title"]}</div>
    <div class="contactingNo"><strong>Contact Number : </strong> ${item.user.contact}</div>
    <div class="isloggedin"> <strong>Online Status : </strong> ${item.loggedIn}</div>
    `
})
document.getElementById("profile-details").innerHTML = MaptheFilter.join("")
}
function editProfile() {
    return location.href = `../html/editprofile.html?id=${profileId}`
}
