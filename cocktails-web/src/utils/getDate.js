
export function getDate(date){
    const dateToString = new Date(date).toLocaleString('es-AR', {
        timeZone: 'UTC',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return dateToString
}