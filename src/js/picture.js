import $ from 'jquery';

export default class Picture {
    constructor () {
        this.initEls()
        this.initEvents()
    }

    initEls () {
        this.els = {
            API_URL : 'https://api.nasa.gov/planetary/apod?api_key=WDCtxXwrsklG9sc6ofDYCLMC31yRIYxgKoppClm7'
          // API_URL : 'https://pokeapi.co/api/v2/ability/?limit=150'
        }
    }

    initEvents () {
        this.getPicture_Infos()
    }

    getPicture_Infos() {
       $.ajaxSetup({cache: false})
       fetch(this.els.API_URL)
            .then((response) => response.json())
            .then ((data) => {
                console.log(data)
                this.getData(data)
            })
          // Ancienne tentative
          /*  {
                console.log(response)
                let data = response.json()
                let data2 = Promise.resolve(data)
                console.log(data2)
                this.getData(data)
           
        }) 
            .catch((err) => {
            console.log('Error Quote', err)
        });*/
    } 
    getData(data) {
        document.querySelector(".jsmars").innerHTML = data.date
    }
}

    