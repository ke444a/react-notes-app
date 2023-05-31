export function sortNotes(notes) {
    return notes.sort((a, b) => b.updatedAt - a.updatedAt);
}