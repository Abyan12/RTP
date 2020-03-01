function alert(icon,title,isi){
    Swal.fire({
        allowOutsideClick:false,
        icon:icon,
        title:"<strong>" + title + "</strong>",
        html:isi,
        showCancelButton:true,
    }).then((result)=>{
        if(result.value){
            window.location.href="index.html"
        }
    })
}