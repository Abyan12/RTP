var map,marker;
function initMap(){
    var lat = new google.maps.LatLng(-6.21,106.85)
    var loc = [
        ['kemang','-6.2777619','106.8026676'],
        ['Jakarta','-6.21','106.85']
    ];
    map = new google.maps.Map(document.getElementById('map'), {
        center: lat,
        zoom: 12
    });
    for(let i=0;i< loc.length;i++){
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(loc[i][1],loc[i][2]),
            map: map,
            title:loc[i][0]
        })
        // console.log(loc[i][1])
    }
}

function alert_info(title, isi) {
    Swal.fire({
        allowOutsideClick: false,
        icon: "info",
        title: "<strong>" + title + "</strong>",
        html: isi,
        showCancelButton: true,
    }).then((result) => {
        if (result.value) {
            window.location.href = "index.html";
        }
    });
}

function alert_danger(title,isi,link){
    Swal.fire({
        allowOutsideClick: false,
        icon: "error",
        title: "<strong>" + title + "</strong>",
        html: isi,
        // showCancelButton: true,
    }).then((result) => {
        if (result.value) {
            window.location.href = link;
        }
    });
}

function alert_succes(title,isi,link){
    Swal.fire({
        allowOutsideClick: false,
        icon: "success",
        title: "<strong>" + title + "</strong>",
        html: isi,
        // showCancelButton: true,
    }).then((result) => {
        if (result.value) {
            window.location.href = link;
        }
    });
}

$(document).ready(function(){
    $("#login").click(()=>{
        var email = $("#email").val()
        var pass = $("#password").val()
        let data = JSON.parse(window.localStorage.getItem('user'))
        if(email === data.email && pass === data.password){
            alert_succes("Succes","Login berhasil","index.html")
        }
        else{
            alert_danger("Gagal","Gagal login","login.html")
        }
    })
    $("#signup").click(()=>{
        const data = {}
        var email = $("#email").val()
        var nama = $("#username").val()
        var tel = $("#phone").val()
        var password = $("#password").val()
        data.name = nama
        data.email = email
        data.phone = tel
        data.password = password
        window.localStorage.setItem('user',JSON.stringify(data))
        alert_succes("Succes Register","Thanks for register","login.html")
    })
    $("#signup").click(()=>{
        window.location.href = "login.html"
    })
})