import "./ContactPopup.css";

function ContactPopup({ isPopupOpen, setPopupOpen }: { isPopupOpen: boolean, setPopupOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div
            className={`contact-popup ${isPopupOpen ? "visible" : ""}`}
            onMouseEnter={() => setPopupOpen(true)}
            onMouseLeave={() => setPopupOpen(false)}
        >
            <p>adlaibb@gmail.com</p>
        </div>
    );
}

export default ContactPopup;
