import Select from "@/component/form/Select";
import Input from "@/component/form/Input";
import Header from "./modalcomponent/Header";
import Footer from "./modalcomponent/Footer";

function SearchModal() {
  const docType = [
    {
      name: "Any ...",
      value: "",
    },
    {
      name: "0% Acc Commission",
      value: "0%AccCommission",
    },
    {
      name: "0% C/Card Commission",
      value: "0%C/CardCommission",
    },
    {
      name: "0% Cash Commission",
      value: "0%CashCommission",
    },
    {
      name: "Deposit (Refundable on 14 Days Working Resing)",
      value: "Deposit(Refundable on 14 Days Working Resing)",
    },
    {
      name: "Extra cash return from driver fare 3rd party etc",
      value: "Extra cash return from driver fare 3rd party etc",
    },
    {
      name: "C/Card Earnings Commissions",
      value: "C/Card Earnings Commissions",
    },
    {
      name: "C/Card Expenses",
      value: "C/Card Expenses",
    },
  ];

  return (
    <div
      className="modal__container driver__main"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="search__modal">
        <Header title="Search" />
        <div className="search__middle">
          <span className="example__text--second">
            Please Enter as much information as you can:{" "}
          </span>
          <Input
            label="Driver ID"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="Driver ID"
            type="text"
            id="driverid"
            visibility="visible"
          />
          <span className="example__text--second center">OR</span>
          <Input
            label="Full Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="Full Name"
            type="text"
            id="fullname"
            visibility="visible"
          />
          <span className="example__text--second center">AND</span>

          <Select
            label="Charge Template"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            id="chargetemplate"
            data={docType}
            visibility="visible"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SearchModal;
