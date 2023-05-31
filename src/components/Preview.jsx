import ReactMarkdown from "react-markdown";

function Preview(props) {
    return (
        <>
            <h1 className="fw-bold">
                {props.currentNote.title}
            </h1>
            <ReactMarkdown>
                {props.currentNote.content}
            </ReactMarkdown>
        </>
    );
}

export default Preview;