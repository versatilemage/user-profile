const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const profileId = urlParams.get('id')

let retrival = JSON.parse(localStorage.getItem("localData"))

function editingProfile() {
    const savedNames = retrival.profile.filter((item) => item.userid === profileId)
    const MaptheSaved = savedNames.map((item) => {
        return `<div class="form-row">
    <label>FirstName</label>
    <input type="text" id="changeofFname" value="${item.user.name.first}">
    </div>
    <div class="form-row">
    <label>LastName</label>
    <input type="text" id="changeofLname" value="${item.user.name.last}">
    </div>
    <div class="form-row">
    <label>Title</label>
    <input type="text" id="changeofTitle" value="${item.user.name.title}">
    </div>
    <div class="form-row">
    <label>Team</label>
    <input type="text" id="changeofteam" value="${item.team}">
    </div>
    <div class="form-row">
    <label>Job</label>
    <input type="text" id="changeofadd" value="${item["job-title"]}">
    </div>
    <div class="form-row">
    <label>Contact</label>
    <input type="number" id="changeofphn" value="${item.user.contact}">
    </div>
    <div class="form-row">
    <label>Email</label>
    <input type="email" id="changeofMail" value="${item.user.email}">
    </div>
    <div class="form-row">
    <label>Upload</label>
    <input type="text" id="Myfile" value="${item.user.picture.large}">
    <input type="hidden" id="Myfile-Medium" value="${item.user.picture.thumbnail}">
    <input type="hidden" id="Myfile-Large" value="${item.user.picture.thumbnail}">
    <div class="note"><span>note:</span>use only url's for image</div>
    </div>
    <div class="form-row hidden-row">
    <label>Last-login</label>
    <input type="hidden" id="todayDate" value="${item["last-login"].datetime}">
    </div>
    <div class="form-row">
    <label>Join-Date</label>
    <input type="text" id="joiningDate"  value="${item.user["join-date"]}">
    </div>
    <div class="form-row">
    <label>Online Status</label>
    <input type="text" id="0nOrof" value="${item.loggedIn}">
    </div>
    `
    })
    document.getElementById("profile-is-edited").innerHTML = MaptheSaved.join("")
}

function saveChanges() {
    var today = new Date();
    const result = today.getDate();
    const fullYear = (today.getFullYear())
    var forzeromonth = today.toLocaleDateString("en-Gb", { month: "2-digit" })
    var forTime = today.toLocaleTimeString()

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
            console.log(item, "item")
            setTimeout(function () {
                localStorage.setItem('localData', JSON.stringify(retrival));
                alert("Profile details have updated successfully")
                return location.href = "../index.html";
            }, 50);
        }
    })

}
