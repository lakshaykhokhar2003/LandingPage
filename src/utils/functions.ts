export const capitalize = (str: string): string => {
    return str
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};


const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const getCurrentTime = (): string => {
    const now: Date = new Date();
    const month: string = months[now.getMonth()];
    const date: number = now.getDate();
    const year: number = now.getFullYear();
    return `${month} ${date}, ${year} `;
}

