import MarkDown from "markdown-to-jsx";
import { useState, useEffect } from "react";

export default function MarkdownContent({ fileName, language }) {
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
            <section className="markdown-content">
                <MarkDown>{post}</MarkDown>
            </section>
        </>
    );
}
