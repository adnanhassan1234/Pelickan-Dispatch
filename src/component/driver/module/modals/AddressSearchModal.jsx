import { Search } from "@/assets/svg/Svg";
import Header from "./modalcomponent/Header";
import Footer from "./modalcomponent/Footer";
import Input from "@/component/form/Input";

function AddressSearchModal() {
  return (
    <div className="modal__container">
      <div className="address__modal">
        <Header title="Address Search" />
        <div className="address__middle">
          <div className="modal__input">
            <label htmlFor="sAddress">Search Address</label>
            <div className="modal__input--group">
              <input
                id="sAddress"
                type="text"
                placeholder="110 Kaniworth Avenue Reading, RG30 3DW"
              />
              <button>
                <Search />
                Search...
              </button>
            </div>
          </div>

          <Input
            label="Founded Address"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="Founded Address"
            type="text"
            id="foundedaddress"
            visibility="visible"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AddressSearchModal;
