const hours = document.getElementById('hrs')
const minutes = document.getElementById('min')
const seconds = document.getElementById('sec')


setInterval(() => {
    const currentTime = new Date()
    hours.innerText = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours()
    minutes.innerText = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes()
    seconds.innerText = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds()
}, 1000)
