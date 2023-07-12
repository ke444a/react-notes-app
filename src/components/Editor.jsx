import Form from "react-bootstrap/Form";

function Editor(props) {
    function handleFormChange(event) {
        const {name, value} = event.target;
        props.updateNote({ ...props.currentNote, updatedAt: Date.now(), [name]: value });
    }

    return (
        <Form>
            <Form.Group>
                <Form.Control 
                    name="title" 
                    type="text" 
                    placeholder="Title..." 
                    className="mb-4 p-3"
                    value={props.currentNote.title}
                    onChange={handleFormChange}
                />
                <Form.Control 
                    name="content" 
                    type="text" 
                    placeholder="Content..." 
                    as="textarea"
                    className="p-3"
                    value={props.currentNote.content}
                    onChange={handleFormChange}
                    rows={25}
                />
            </Form.Group>
        </Form>
    );
}

export default Editor;