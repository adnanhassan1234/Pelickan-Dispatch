import Header from "./modalcomponent/Header";
import Footer from "./modalcomponent/Footer";

function Reason() {
  return (
    <div className="modal__container">
      <div className="document__modal generic__modal">
        <Header title="Reason" />
        <div className="document__middle generic__middle">
          <div className="detail__input">
            <textarea
              id="reason"
              name="reason"
              rows="5"
              cols="60"
              defaultValue=" 110 Kaniworth Avenue Reading, RG30 3DW"
            ></textarea>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Reason;
