import Sidebar from "./components/Sidebar";
import Note from "./components/Note";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
    const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || []);
    const [currentNoteId, setCurrentNoteId] = useState(notes[0]?.id || "");

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);


    function addNote() {
        const newNote = {
            id: nanoid(),
            title: "Untitled",
            content: "",
            updatedAt: Date.now()
        };
        setNotes(prevNotes => [...prevNotes, newNote]);
        setCurrentNoteId(newNote.id);
    }

    function updateNote(updatedNote) {
        setNotes(prevNotes => prevNotes.map(note => {
            if (note.id === updatedNote.id) {
                return updatedNote;
            } else {
                return note;
            }
        }));
    }

    function getCurrentNote() {
        return notes.find(note => note.id === currentNoteId) || notes[0];
    }

    function deleteNote(noteToDeleteId) {
        setNotes(prevNotes => prevNotes.filter(note => note.id !== noteToDeleteId));

        if (noteToDeleteId === currentNoteId && notes.length > 0) {
            setCurrentNoteId(notes[0].id);
        }
    }

    return (
        <>
            <Sidebar 
                notes={notes}
                addNote={addNote}
                deleteNote={deleteNote}
                currentNoteId={currentNoteId}
                setCurrentNoteId={setCurrentNoteId}
            />
            <Note 
                updateNote={updateNote}
                currentNote={getCurrentNote()}
            />
        </>
    );
};

export default App;
