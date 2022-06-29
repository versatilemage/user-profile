const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const profileId = urlParams.get('id')

function profileLoading() {
    let getLocalData = JSON.parse(localStorage.getItem("localData"));

    const savedFilter = getLocalData.profile.filter((item) => item.userid === profileId)
    const MaptheFilter = savedFilter.map((item) => {
        if (item.loggedIn === true) {
            item.loggedIn = `online`
        } else {
            item.loggedIn = `offline`
        }
        return `
    <div class="user-thumb"><img src="${item.user.picture.large}"></div>
    <div class="for-order">
    <div class="user-name"><strong>Name</strong></div><div>${item.user.name.title}. ${item.user.name.first} ${item.user.name.last}</div>
    <div class="forteam"> <strong>Team</strong></div><div>${item.team}</div>
    <div class="Id-No"><strong>User-Id</strong></div><div>${item.userid}</div>
    <div class="forjobdetail"> <strong>Job</strong></div><div>${item["job-title"]}</div>
    <div class="contactingNo"><strong>Contact Number</strong></div><div>${item.user.contact}</div>
    <div class="isloggedin" id="log-in-color"> <strong>Online Status</strong></div><div>${item.loggedIn}</div>
    </div>
    `
    })
    document.getElementById("profile-details").innerHTML = MaptheFilter.join("")
}
function editProfile() {
    return location.href = `../html/editprofile.html?id=${profileId}`
}
