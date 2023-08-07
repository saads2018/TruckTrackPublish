function SelectAll(count) {

    var check = document.getElementById("checkAll").checked;

    for (let i = 0; i < count; i++) {
        document.getElementById("check " + i).checked = check;
    }
}

window.addEventListener('popstate', function (event) {
    location.reload();
});



function loadSearch(hide) {
    document.getElementById("list").style = hide;
}
function loaderVisibility(hide) {
    document.getElementById("load").style.display = hide;
}
function clickLogin() {
    var link = document.getElementById("loginPage");
    link.click(); 
}
function getLink() {
    return window.location.href.toString();
}
function getWidth() {
    return window.innerWidth;
}

function getPass(type,username) {
    return document.getElementById(type + username).value;
}

function checkIfChecked(count) {

    var indexes = "";
    for (let i = 0; i < count; i++) {
        if (document.getElementById("check " + i).checked == true) {
            indexes += document.getElementById("check " + i).value + ":";
        }
    }

    return indexes;
}

function getDriver() {
    return document.getElementById("driversList").value;
}

function getRoutesList() {
    var btns = document.getElementById("routeCard").getElementsByTagName("a");

    var list = "";
    for (let i = 0; i < btns.length; i++) {
        if (btns[i].innerText != "X") {
            list += btns[i].innerText+":";
        }
    }
    return list;
}

function getType() {
    return document.getElementById("type").value;
}
function msg(msg) {
    alert(msg);
}
function addButton() {
    var route = document.getElementById('routeList321').value;
    var btns = document.getElementById("routeCard").getElementsByTagName("button");
    var text = route;

    if (text.length > 13) {
        text = text.substring(0, 13) + "...";
    }

    var routeMod = text.replace(/\s/g, "");

    var exists = false;
    for (let i = 0; i < btns.length; i++) {
        var replace = btns[i].innerText.replace(/\s/g, "");
        if (replace == routeMod) {
            exists = true;
        }
    }

    if (!exists) {
        var button = document.createElement("button");
        var btnDelete = document.createElement("button");
        var link = document.createElement("a");

        button.innerText = text;
        button.style = "margin-right:5px; margin-top:5px;"
        button.className = "btn btn-sm btn-primary";
        button.id = text;

        link.innerText = route;
        link.hidden = true;

        btnDelete.innerText = "X";
        btnDelete.style = "margin-right:5px; margin-top:5px;"
        btnDelete.className = "btn btn-sm btn-danger";

        btnDelete.addEventListener("click", function () {
            document.getElementById("routeCard").removeChild(button);
            document.getElementById("routeCard").removeChild(btnDelete);
            if (document.getElementById("routeCard").children.length == 0) {
                document.getElementById("routeCard").hidden = true;
            }
            else if ((btns.length) % 6 == 0) {
                var space = document.getElementsByTagName("br");
                document.getElementById("routeCard").removeChild(space[space.length - 1]);
                var x = Number(document.getElementById("routeCard").style.height.replace("px", ""));
                x = x - 50;
                document.getElementById("routeCard").style.height = x.toString() + "px";
            }
        });

        document.getElementById("routeCard").hidden = false;
        if (btns.length > 0 && btns.length % 6==0) {
            button.style = "margin-right:5px; margin-top:5px;"
            btnDelete.style = "margin-right:5px; margin-top:5px;"
            var space = document.createElement("br");

            var x = Number(document.getElementById("routeCard").style.height.replace("px",""));
            x = x + 50;
            document.getElementById("routeCard").style.height = x.toString() + "px";
            document.getElementById("routeCard").appendChild(space);
        }
        document.getElementById("routeCard").appendChild(button);
        document.getElementById("routeCard").appendChild(btnDelete);
        document.getElementById("routeCard").appendChild(link);
    }
    else {
        msg("This Route Has Already Been Chosen Before!");
    }
}

function hideList(dotNetRef) {
    document.addEventListener("click", function (event) {
        if (event.target != document.getElementById("name")) {
            document.getElementById("list").style = "background-color:white;  border-style:solid;  padding-top:10px; padding-left:20px; border-color:#e9e7ec; border-size:10px; font-size:small; width:33.7%; margin-left:150px; margin-top:28px; overflow-y:auto; height:300px; position:fixed; display:none";
            dotNetRef.invokeMethodAsync('hideList');
        }
    });
}

function getNameValue() {
    return document.getElementById("name").value;
}

function setNameValue(Name) {
   document.getElementById("name").value=Name;
}

function getAddressValue() {
    return document.getElementById("address").value;
}
function setAddress(address) {
    document.getElementById("address").value = address;
}

window.addEventListener('scroll', handleScroll);

function handleScroll() {
    if (window.scrollY > 0) {
        document.getElementById("backPage").style.display = "none";
    } else {
        document.getElementById("backPage").style.display = "block";
    }
}

function showPopUp(img) {
    if (img == "") {
        img = "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png";
    }

    document.getElementById("popup").style.display = "block";
    document.getElementById("invoiceImage").setAttribute('src', img);
    document.getElementById("invoiceImage").value = img;
}

function showPopUpMap(coordinates, times, speeds) {
    initializeMap(coordinates, times, speeds);
    document.getElementById("map").style.visibility = "visible";
    document.getElementById("popup1").style.display = "block";
}

function openInNewTab(value) {
    if (value == "") {
        value = "https://howfix.net/wp-content/uploads/2018/02/sIaRmaFSMfrw8QJIBAa8mA-article.png";
    }

    window.open(value, "_self");
}


function addBackOut() {
    document.addEventListener('click', function (event) {
        var divCont = document.getElementById('popup');
        var divCont1 = document.getElementById('popup1');
        var div = document.getElementById('popup-dialog');
        var div1 = document.getElementById('popup-dialog1');
        var div2 = document.getElementById('map');

        var targetElement = event.target;

        // Check if the clicked element is a child of the div
        if ((divCont.style.display == "block" && !div.contains(targetElement)) || (divCont1.style.display == "block" && !div1.contains(targetElement) && !div2.contains(targetElement))) {
            document.getElementById("popup").style.display = "none";
            document.getElementById("popup1").style.display = "none";
            document.getElementById("map").style.visibility = "hidden";
            document.getElementById("invoiceLabel").style.display = "block";
            document.getElementById("invoiceImage").style.display = "block";
        }
    });
}

class Coordindate {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
    }
}

window.initializeMap = (coordinates, times, speeds) => {
    // Create the map
    
    var maps = document.createElement("div");
    maps.id = "map";
    maps.style = "visibility:hidden; width:1252px; z-index:9999; height: 660px; position:fixed; top:5%; left:9%;"

    if (document.getElementById("map") != null) {
        document.getElementById("map").remove();
    }

    document.body.appendChild(maps);

    var map = L.map('map').setView([47.618591, -122.350553], 13);
    // Add the tile layer (you can use other tile providers as well)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Retrieve the GPS coordinates from your C# code
    // Create an array to hold the polyline points
    var polylinePoints = [];

    if (coordinates != null) {
        // Add the polyline points to the array
        for (var i = 0; i < coordinates.length; i++) {
            var coordinate = coordinates[i];
            var time = times[i];
            var speed = speeds[i];
            var marker = L.marker([coordinate.x, coordinate.y]).addTo(map);
            marker.bindPopup(`Speed: ${speed} km/h<br>Time: ${time}`);
            var latLng = L.latLng(coordinate.x, coordinate.y);
            polylinePoints.push(latLng);
        }

        // Create the polyline with the coordinates
        var polyline = L.polyline(polylinePoints, { color: 'red' }).addTo(map);

        // Fit the map to the polyline bounds
        map.fitBounds(polyline.getBounds());
    }

    // Enable the Leaflet.Draw plugin for user interaction (optional)
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems
        },
        draw: {
            polyline: false,
            polygon: false,
            circle: false,
            rectangle: false,
            marker: false
        }
    });
    map.addControl(drawControl);
}

