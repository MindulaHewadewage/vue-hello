// Ciao ragazzi,
// Esercizio di oggi: Vue Hello
// nome repo: vue-hello
// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const app = Vue.createApp({
    data(){
        return{
            name :'Mindu',
            pic :'https://www.google.com/url?sa=i&url=https%3A%2F%2Fit.dreamstime.com%2Fillustrazione-di-stock-icona-piana-dell-avatar-nero-del-magnate-su-bianco-image95789619&psig=AOvVaw0jXvDRK16hBG7EVHwl6LcO&ust=1673377671842000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjkguCXu_wCFQAAAAAdAAAAABAE'
        }
    },
})

app.mount('#root');