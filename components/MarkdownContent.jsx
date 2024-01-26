import { useState, useEffect } from "react";

import "./MarkdownContent.scss";

import MarkDown from "markdown-to-jsx";

export default function MarkdownContent({
    fileName,
    language,
    handleLinkTarget,
    highlightCode,
}) {
    const [post, setPost] = useState("");

    useEffect(() => {
        import(`../content/${language}/${fileName}.md?raw`)
            .then((res) => {
                setPost(res.default);
            })
            .catch((err) => console.log(err));
    });

    return (
        <>
            <MarkDown
                className="markdown-content"
                options={{
                    wrapper: "section",
                }}
            >
                {post}
            </MarkDown>
            {handleLinkTarget()}
            {highlightCode()}
        </>
    );
}
