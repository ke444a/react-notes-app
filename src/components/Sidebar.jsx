import Stack from "react-bootstrap/Stack";
import { sortNotes } from "../utils/sortNotes";
import { faFileCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoteCard from "./NoteCard";

function Sidebar(props) {
    return (
        <div className="sidebar border-end">
            <Stack direction="horizontal" className="p-3 border-bottom">
                <h1>Notes</h1>
                <FontAwesomeIcon className="ms-auto icon-btn add-btn" icon={faFileCirclePlus} onClick={props.addNote} />
            </Stack>
            <Stack>
                {sortNotes(props.notes).map((note) => {
                    return (
                        <NoteCard
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            updatedAt={note.updatedAt}
                            deleteNote={props.deleteNote}
                            currentNoteId={props.currentNoteId}
                            setCurrentNoteId={props.setCurrentNoteId}
                        />
                    );
                })}
            </Stack>
        </div>
    );
}

export default Sidebar;
