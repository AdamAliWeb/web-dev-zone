import { useState, useEffect } from "react";
import MarkDown from "markdown-to-jsx";
import useMarkdownChecker from "../hooks/useMarkdownChecker";

import "./MarkdownContent.scss";

export default function MarkdownContent({ fileName, language }) {
    const { handleLinkTarget, highlightCode } = useMarkdownChecker();
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
