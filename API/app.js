function tangkap(nama){
    alert("Pokemon telah ditangkap : "+nama)
}
$(document).ready(()=>{
    const data = {}
    // const more = {}
    function load(data){
        // console.log(data)
        const html = `
            <div class="card text-center pb-2">
                <div class="card-header">
                    <div id="title"><h1>${data.name}</h1></div>
                    <img class="card-img-top" src="${data.image}" alt="Card image" style="width:200px;height:200px;">
                </div>
                <div class="card-body">
                    <div id="isi">Berat: ${data.weight}Kg<br> Tinggi : ${data.height}</div>
                    <button onclick="tangkap('${data.name}')">Catch</button>
                </div>
            </div>
        `
        $("#card").append(html)
    }
    function getDetail(pokemon){
        let url  = pokemon.url
        fetch(url).then(response =>{
            response.json().then(hasil=>{
                // let stat = hasil.stats
                data.name = hasil.name
                data.image = hasil.sprites.front_default
                data.weight = hasil.weight
                data.height = hasil.height
                load(data)
                // console.log(data)
            })
        })
    }
    fetch("https://pokeapi.co/api/v2/pokemon/").then(response =>{
        response.json().then(res=>{
            data.next = res.next
            var ress = res.results
        ress.forEach(pokemon =>{
            getDetail(pokemon)
            })
        })
    })

    // function loadMore(more){
    //     const html = `
    //         <div class="card text-center pb-2">
    //             <div class="card-header">
    //                 <div id="title"><h1>${more.name}</h1></div>
    //                 <img class="card-img-top" src="${more.image}" alt="Card image" style="width:200px;height:200px;">
    //             </div>
    //             <div class="card-body">
    //                 <div id="isi">Berat: ${more.weight}Kg<br> Tinggi : ${more.height}</div>
    //                 <button onclick="tangkap('${more.name}')">Catch</button>
    //             </div>
    //         </div>
    //     `
    //     $("#card2").append(html)
    // }
    // function getMore(hasil){
    //     let url = hasil.url
    //     fetch(url).then(resp=>{
    //         resp.json().then(hsl=>{
    //             more.name = hsl.name
    //             more.image = hsl.sprites.front_default
    //             more.weight = hsl.weight
    //             more.height = hsl.height
    //             loadMore(more)
    //         })
    //     })
    // }
    $("#loadMore").click(()=>{
        let next  = data.next
        fetch(next).then(resp =>{
                    resp.next
            resp.json().then(hasil=>{
                let has = hasil.results
                has.forEach(hasil=>{
                    getDetail(hasil)
                })
            })
        })
    })
})