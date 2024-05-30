import "./ModalWindow.css";

export default function ModalWindow({ children, modalState, closeModal }) {
    return (
        <div
            className={`modal-container ${modalState ? "modal-open" : ""}`}
            onClick={() => closeModal()}
        >
            <section
                className={`modal-window card ${
                    modalState ? "modal-open" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </section>
        </div>
    );
}
