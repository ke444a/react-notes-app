import Editor from "./Editor";
import Preview from "./Preview";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function Note(props) {
    return (
        <div className="content p-3 px-5">
            { props.currentNote ?
                <Tabs
                    defaultActiveKey="preview"
                    className="mb-3"
                >
                    <Tab eventKey="edit" title="Edit">
                        <Editor 
                            currentNote={props.currentNote}
                            updateNote={props.updateNote}
                        />
                    </Tab>
                    <Tab eventKey="preview" title="Preview">
                        <Preview 
                            currentNote={props.currentNote}
                        />
                    </Tab>
                </Tabs> : 
                <p className="fw-semibold fs-4"> 
                    No added notes yet
                </p>}
        </div>
    );
}

export default Note;