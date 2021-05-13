
export function slugify(st: string) {
    return st.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9_\-]/g, "-")
        .replace(/--+/g, "-")
        .toLowerCase();
}


export function formatDate(date: Date) {
    const months = "január február március április május június július augusztus szeptember október november december".split(' ');
    return `${date.getFullYear()} ${months[date.getMonth()]} ${date.getDate()}.`;
}


export function zeroPad(num: number, places: number): string {
    const zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}