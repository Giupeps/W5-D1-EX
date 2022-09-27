
//Richiamare la data attuale
let todayDate = new Date()
let americanDate = todayDate.toLocaleDateString('en-US', {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})


function getDate() {


 //Mostrarla in una pagina web
 document.getElementById('today-date').innerHTML = `In america oggi è: ${americanDate}`

 //Mostrare elementi singoli della data
 document.getElementById('day').innerHTML = `Giorno:${todayDate.getDate()}`
 document.getElementById('month').innerHTML = `Mese:${todayDate.getMonth()+1}`
 document.getElementById('year').innerHTML = `Anno:${todayDate.getFullYear()}`
 document.getElementById('hour').innerHTML = `Ora:${todayDate.getHours()}`
 document.getElementById('minute').innerHTML = `Minuti:${todayDate.getMinutes()}`

 //Formattazione formato europeo
 let todayDateIta = todayDate.toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'})
 let todayTimeIta = todayDate.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit'})

 //Mostrare la data formattata in html
 let itaDateString = `data italiana: ${todayDateIta}, ore: ${todayTimeIta}`
 document.getElementById('today-date-ita').innerHTML = itaDateString 
}





