export function formatDate(updatedAtDate) {
    const options = {
        hour: "2-digit",
        minute: "2-digit",
        month: "long",
        day: "numeric",
    };
    return new Date(updatedAtDate).toLocaleDateString("en-US", options);
}