export function stringToRoute(string) {
    let titleNoSpaces = string.replace(/ /g, '-');
    // let titleLowerCase = titleNoSpaces.toLowerCase();
    return titleNoSpaces.replace(/[^a-zA-Z0-9-]/g, '-');
}
