import Header from "./modalcomponent/Header";
import Footer from "./modalcomponent/Footer";

function AttributesModal() {
  return (
    <div
      className="modal__container driver__main"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="search__modal generic__modal">
        <Header title="Attributes" />
        <div className="search__middle generic__middle">
          <span className="example__text--second">
            Please select the required Attribute:{" "}
          </span>
          <div className="detail__input">
            <textarea
              id="drivernotes"
              name="notes"
              rows="18"
              cols="60"
              defaultValue="Available Driver Attributes"
            ></textarea>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AttributesModal;
