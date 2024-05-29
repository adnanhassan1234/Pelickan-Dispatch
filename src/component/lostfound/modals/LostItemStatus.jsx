import Header from "@/component/driver/module/modals/modalcomponent/Header";
import Footer from "@/component/driver/module/modals/modalcomponent/Footer";
import Lost from "@/assets/Lost.png";
import VerticalTable from "@/component/form/VerticalTable";

function LostItemStatus() {
  const data = {
    "Delivered To": "Gul Khan",
    "Delivered Item": "Wallet",
    "Date & Time": "02/15/2024 - 14:00",
    Status: "Failed",
    "Contact Receiver": "02/15/2024 - 14:00",
    "Contact Driver": "02/15/2024 - 14:00",
  };

  return (
    <div className="modal__container">
      <div className="generic__modal">
        <Header title="Lost & Found item Status" />
        <div className="generic__middle lostfound__middle">
          <img src={Lost} alt="" />
          <div className="table__main">
            <VerticalTable data={data} nextScreen="" />
          </div>
        </div>
        <hr className="line-bottom" />
        <Footer />
      </div>
    </div>
  );
}

export default LostItemStatus;
