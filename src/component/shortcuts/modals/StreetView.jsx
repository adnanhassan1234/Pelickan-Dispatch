import Header from "../../driver/module/modals/modalcomponent/Header";
import Footer from "../../driver/module/modals/modalcomponent/Footer";
import streetview from "@/assets/streetview.png";
function StreetView() {
  return (
    <div className="modal__container">
      <div className="generic__modal">
        <Header title="Street View" />
        <div className="generic__middle shortcut__middle">
          <img src={streetview} alt="" />
        </div>
        <hr className="line-bottom" />
        <Footer />
      </div>
    </div>
  );
}

export default StreetView;
