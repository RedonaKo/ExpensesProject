export function getFormattedDate(date) {
    if (!(date instanceof Date) || isNaN(date)) {
        return 'Invalid date';
    }
    return date.toISOString().slice(0, 10);
}

export function getDateMinusDays(date, days) {
    if (!(date instanceof Date) || isNaN(date)) {
        return new Date(); 
    }
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
