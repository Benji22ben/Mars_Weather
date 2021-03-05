export function convertDate(date) {
    
    date = new Date(date)
    
    let year = date.getFullYear()
    
    let month = date.getMonth()
    
    let dt = date.getDate()

    let final_date = dt+'/' + month + '/'+year

    return final_date
}