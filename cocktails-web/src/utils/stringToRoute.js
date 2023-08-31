export function stringToRoute(string) {
    let titleNoSpaces = string.replace(/ /g, '-');
    let titleLowerCase = titleNoSpaces.toLowerCase();
    return titleLowerCase.replace(/[^a-zA-Z0-9-]/g, '-');
}
