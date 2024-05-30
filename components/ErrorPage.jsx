export default function ErrorPage({ errorTitle }) {
    return (
        <article className="error-page">
            <h1 className="error-title">{errorTitle}</h1>
        </article>
    );
}
