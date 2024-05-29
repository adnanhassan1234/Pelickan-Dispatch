import Header from "@/component/driver/module/modals/modalcomponent/Header";
import Footer from "@/component/driver/module/modals/modalcomponent/Footer";
import Lost from "@/assets/Lost.png";
import VerticalTable from "@/component/form/VerticalTable";

function LostItemDetail() {
  const data = {
    "Passenger Name": "Gul Khan",
    "Lost Item": "Wallet",
    "Lost Item Description":
      " is simply dummy text of the printing andLorem Ipsum is simply dummy text of the printing and Lorem Ipsum is simply dummy text of the printing and ...",
    "Contact Passenger": "Make a Call",
    "Date & Time": "02/15/2024 - 14:00",
  };

  return (
    <div className="modal__container">
      <div className="generic__modal">
        <Header title="Lost & Found item Details" />
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

export default LostItemDetail;
