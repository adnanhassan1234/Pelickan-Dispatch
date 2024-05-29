import Header from "./modalcomponent/Header";
import Footer from "./modalcomponent/Footer";

function DeleteModal() {
  return (
    <div
      className="modal__container driver__main"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="search__modal generic__modal">
        <Header title="Delete" />
        <div className="search__middle generic__middle">
          <span className="example__text--second">
            Are you sure you wanna delete this?
          </span>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DeleteModal;
