const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const profileId = urlParams.get('id')

let retrival = JSON.parse(localStorage.getItem("localData"))

function editingProfile() {
    const savedNames = retrival.profile.filter((item) => item.userid === profileId)
    const MaptheSaved = savedNames.map((item) => {
        return `<div class=""user-row>
    <label>First Name</label>
    <input type="text" id="changeofFname" value="${item.user.name.first}">
    <br><br>
    <label>Last Name</label>
    <input type="text" id="changeofLname" value="${item.user.name.last}">
    <br><br>
    <label>Title</label>
    <input type="text" id="changeofTitle" value="${item.user.name.title}">
    <br><br>
    <label>Team</label>
    <input type="text" id="changeofteam" value="${item.team}">
    <br><br>
    <label>Job</label>
    <input type="text" id="changeofadd" value="${item["job-title"]}">
    <br><br>
    <label>Contact</label>
    <input type="number" id="changeofphn" value="${item.user.contact}">
    <br><br>
    <label>Email</label>
    <input type="email" id="changeofMail" value="${item.user.email}">
    <br><br>
    <label>Upload</label>
    <input type="text" id="Myfile" value="${item.user.picture.thumbnail}">
    <input type="hidden" id="Myfile-Medium" value="${item.user.picture.thumbnail}">
    <input type="hidden" id="Myfile-Large" value="${item.user.picture.thumbnail}">
    <div><span>note:</span>use only url's for image</div>
    <br><br>
    <label>Last-login</label>
    <input type="hidden" id="todayDate" value="${item["last-login"].datetime}">
    <br><br>
    <label>Join-Date</label>
    <input type="text" id="joiningDate"  value="${item.user["join-date"]}">
    <br><br>
    <label>Online Status</label>
    <input type="text" id="0nOrof" value="${item.loggedIn}">
    </div>
    `
    })
    document.getElementById("profile-is-edited").innerHTML = MaptheSaved.join("")
}

function saveChanges() {
    let today = new Date();
    const result = today.getDate();
    const fullYear = (today.getFullYear())
    let forzeromonth = today.toLocaleDateString("en-Gb", { month: "2-digit" })
    let forTime = today.toLocaleTimeString()

    let item = {}
    item.user = {}
    item.user.name = {}
    item.user.picture = {}
    item["last-login"] = {}
    item.userid = profileId;
    item.user.name.first = document.getElementById("changeofFname").value;
    item.user.name.last = document.getElementById("changeofLname").value;
    item.user.name.title = document.getElementById("changeofTitle").value;
    item.user.picture.thumbnail = document.getElementById("Myfile").value;
    item.user.picture.medium = document.getElementById("Myfile").value;
    item.user.picture.large = document.getElementById("Myfile").value;
    item.team = document.getElementById("changeofteam").value;
    item["job-title"] = document.getElementById("changeofadd").value;
    item.user.contact = document.getElementById("changeofphn").value;
    item.user.email = document.getElementById("changeofMail").value;
    item["last-login"].datetime = (`${result}-${forzeromonth}-${fullYear}  ${forTime}`);
    item.loggedIn = document.getElementById("onOrof");
    item.user["join-date"] = document.getElementById("joiningDate").value;

    retrival.profile.forEach((obj, index) => {
        if (obj.userid == item.userid) {
            retrival.profile[index] = item;
            setTimeout(function () {
                localStorage.setItem('localData', JSON.stringify(retrival));
                alert("Profile details have updated successfully")
                return location.href = "../index.html";
            }, 50);
        }
    })

}
