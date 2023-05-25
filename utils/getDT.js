
export const getCurrentDate = ()=> {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    return date + '-' + month + '-' + year;
}


export const getCurrentTime = ()=> {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()

    if (minutes / 10 < 1) {
        minutes = minutes.toString()
        minutes = '0'+  minutes
    }
    return hours + ':' + minutes
}