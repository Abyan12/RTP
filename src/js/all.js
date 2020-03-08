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