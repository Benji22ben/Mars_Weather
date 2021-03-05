import $ from 'jquery';
import { convertDate } from './helper/pictureHelper';

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
        this.$els = {
            picture: $('.js-poftheday'),
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
    } 

    // Data are used from the API and sent to the index.html 
    getData(data) {
        document.querySelector(".js-date").innerHTML = convertDate(data.date)  
        document.querySelector(".js-title").innerHTML = data.title
        document.querySelector(".js-explanation").innerHTML = data.explanation
        this.addImage(data) 
    }

    // Image is added to the index 
    addImage(image) {
        this.$els.picture.css('content', `url(${image.hdurl})`)
    }
}
    