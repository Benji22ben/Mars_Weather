import '../css/app.scss'
import Picture from './picture'

class App {
    constructor () {
        this.initApp()
    }

    initApp () {
        // Start application
        new Picture()
    }
}

new App();
