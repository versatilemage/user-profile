let database = {
  "profile": [
    {
      "userid": "1",
      "user": {
        "name": {
          "first": "John",
          "last": "Doe",
          "short": "JD",
          "title": "Mr"
        },
        "email": "johndoe@kg.com",
        "contact": "0123456789",
        "contact-ext": "+001",
        "join-date": "02-Jan-2018",
        "join-date-format": "D-M-Y",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        }
      },
      "team": "marketing",
      "job-title": "Designer",
      "last-login": {
        "datetime": "2020-01-21 23:04:06",
        "format": "Y-M-D h:m:s"
      },
      "loggedIn": false
    },
    {
      "userid": "2",
      "user": {
        "name": {
          "first": "John",
          "last": "Skeet",
          "short": "JS",
          "title": "Mr"
        },
        "email": "johnskeet@kg.com",
        "contact": "0123456788",
        "contact-ext": "+001",
        "join-date": "22-Feb-2018",
        "join-date-format": "D-M-Y",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/74.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
        }
      },
      "team": "marketing",
      "job-title": "Sales head",
      "last-login": {
        "datetime": "2020-01-21 20:04:10",
        "format": "Y-M-D h:m:s"
      },
      "loggedIn": false
    },
    {
      "userid": "3",

      "user": {
        "name": {
          "first": "Ruby",
          "last": "Perry",
          "short": "RB",
          "title": "Ms"
        },
        "email": "rubyperry@kg.com",
        "contact": "0123458788",
        "contact-ext": "+001",
        "join-date": "01-Mar-2019",
        "join-date-format": "D-M-Y",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/28.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
        }
      },
      "team": "Research",
      "job-title": "Research Associate",
      "last-login": {
        "datetime": "2020-01-21 03:04:56",
        "format": "Y-M-D h:m:s"
      },
      "loggedIn": false
    },
    {
      "userid": "4",

      "user": {
        "name": {
          "first": "Stella",
          "last": "Brown",
          "short": "SB",
          "title": "Ms"
        },
        "email": "stellaberry@kg.com",
        "contact": "908765430",
        "contact-ext": "+001",
        "join-date": "31-Jan-2019",
        "join-date-format": "D-M-Y",
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/29.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/29.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/29.jpg"
        }
      },
      "team": "Research",
      "job-title": "Research Associate - Intern",
      "last-login": {
        "datetime": "2020-01-21 23:54:06",
        "format": "Y-M-D h:m:s"
      },
      "loggedIn": false
    },
    {
      "userid": "5",
      "user": {
        "name": {
          "first": "Justin",
          "last": "Knight",
          "short": "JK",
          "title": "Mr"
        },
        "email": "justin.knight@kg.com",
        "contact": "000897689",
        "contact-ext": "+001",
        "join-date": "01-Jul-2018",
        "join-date-format": "D-M-Y",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/28.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/28.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/28.jpg"
        }
      },
      "team": "Development",
      "job-title": "Software Developer",
      "last-login": {
        "datetime": "2020-01-21 12:15:09",
        "format": "Y-M-D h:m:s"
      },
      "loggedIn": true
    },
    {
      "userid": "6",
      "user": {
        "name": {
          "first": "Tyler",
          "last": "Holmes",
          "short": "TH",
          "title": "Mr"
        },
        "email": "tyler.holmes@kg.com",
        "contact": "9876890123",
        "contact-ext": "+001",
        "join-date": "01-Jul-2018",
        "join-date-format": "D-M-Y",
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/30.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
        }
      },
      "team": "Development",
      "job-title": "Software Developer",
      "last-login": {
        "datetime": "2020-01-21 12:25:29",
        "format": "Y-M-D h:m:s"
      },
      "loggedIn": true
    }
  ]
}

function loadUser() {
  if (!JSON.parse(localStorage.getItem("localData"))) {
    localStorage.setItem("localData", JSON.stringify(database));
  }
  const getLocalData = JSON.parse(localStorage.getItem("localData"));
  const databaseMap = getLocalData.profile.map((item) => {
    return `<div class="user-row">
  <div class="user-thumb"><img src="${item.user.picture.large}"></div>
  <div class="right-side">
  <div class="users-details"><strong>Name</strong></div> <div>${item.user.name.title}. ${item.user.name.first} ${item.user.name.last}</div>
  <div><strong>User-ID</strong></div>
  <a class="users-details" href="../html/profile.html?id=${item.userid}" value="${item.userid}">${item.userid}</a>
  <div class="users-details"><strong>Team</strong></div><div> ${(item.team)}</div>
  <div class="users-details"><strong>Designation</strong></div><div> ${(item["job-title"])}</div>
  <div class="users-details"><strong>Contact Number</strong></div><div> ${item.user.contact}</div>
  <div class="users-details"><strong>E-mail</strong></div><div>${item.user.email}</div>
  <div class="users-details"><strong>Join Date</strong></div><div> ${item.user["join-date"]}</div>
  <div class="users-details"><strong>Last online</strong> </div><div class="online-details"><strong>${item["last-login"].datetime}</strong></div>
  </div></div>`
  })

  document.getElementById("user-details").innerHTML = databaseMap.join("")
}
