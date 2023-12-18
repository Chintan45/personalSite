export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const refeactorUrlPath = (path) => {
    const splitedPath = path.split(' ');
    return splitedPath.join("-");
}