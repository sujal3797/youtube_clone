export const timeSince = (date) => {
    const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);

    console.log(seconds)

}