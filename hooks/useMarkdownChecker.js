import hljs from "highlight.js";
import { useEffect, useState } from "react";

export default function useMarkdownChecker(fileName, language) {
    const [post, setPost] = useState("");
    const [failedResponse, setFailedResponse] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/assets/content/${language}/${fileName}.md`)
            .then((res) => res.text())
            .then((res) => {
                if (!res) throw new Error("Wrong Route");
                setPost(res);
                setLoading(false);
            })
            .catch((err) => {
                console.log("The request to the Markdown failed: ", err);
                setLoading(false);
                setFailedResponse(true);
            });
    });

    const handleLinkTarget = () => {
        Array.from(document.querySelectorAll(".markdown-content a")).forEach(
            (link) => (link.target = "_blank")
        );
    };

    const highlightCode = () => {
        hljs.highlightAll();
        console.clear();
    };

    return { post, loading, failedResponse, handleLinkTarget, highlightCode };
}
