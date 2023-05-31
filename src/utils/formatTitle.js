export function formatTitle(title) {
    if (title.length > 0) {
        return title.length > 20 ? title.substring(0, 20).concat("...") : title;
    } else {
        return "Untitled";
    }
}