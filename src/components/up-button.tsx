import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UpButton: React.FC<{ visibility: boolean }> = ({ visibility }) => {
  return (
    <button
      className="up-button"
      style={{ display: visibility ? "block" : "none" }}
      onClick={() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};
