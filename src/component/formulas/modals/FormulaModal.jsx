import Header from "@/component/driver/module/modals/modalcomponent/Header";
import Footer from "@/component/driver/module/modals/modalcomponent/Footer";
import SelectSingle from "@/component/form/SelectSingle";
import InputSingleLabel from "@/component/form/InputSingleLabel";
function FormulaModal() {
  const docType = [
    {
      name: "For the First",
      value: "drivinglicenseno",
    },
  ];
  const docType2 = [
    {
      name: "Charge the First",
      value: "drivinglicenseno",
    },
  ];

  return (
    <div className="modal__container">
      <div className="charges__modal--top formula--modal__top">
        <Header title="Formula Editor" />
        <div className="formula--modal">
          <div className="formula--input formula--selectt">
            <SelectSingle
              label="For the First "
              labelText="Uplift"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              data={docType}
              id="forthefirst"
              visibility="visible"
            />
            <InputSingleLabel
              label="Uplift"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              id="Uplift"
              labelText="Uplift"
              placeholder="1"
              visibility="hidden"
            />
          </div>
          <div className="formula--input formula--selectt">
            <SelectSingle
              label="charge the first"
              labelText="Charge £"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              data={docType2}
              id="statementinterval"
              visibility="visible"
            />
            <InputSingleLabel
              label="Charge £"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              id="Charge£"
              labelText="Charge £"
              placeholder="5"
              visibility="hidden"
            />
          </div>
        </div>
        <hr className="line-bottom" />
        <Footer />
      </div>
    </div>
  );
}

export default FormulaModal;
