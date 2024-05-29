import Input from "@/component/form/Input";
import InputLabel from "@/component/form/InputLabel";
import Header from "../../driver/module/modals/modalcomponent/Header";
import Footer from "../../driver/module/modals/modalcomponent/Footer";
import Select from "@/component/form/Select";
import Table from "@/component/form/Table";
import PropTypes from "prop-types";

function FormulasProperties({ onOpenModal }) {
  const docType = [
    {
      name: "Active",
      value: "active",
    },
    {
      name: "InActive",
      value: "inactive",
    },
  ];
  const ChargedBy = [
    {
      name: "Active",
      value: "active",
    },
    {
      name: "Miles",
      value: "miles",
    },
    {
      name: "Minutes",
      value: "minutes",
    },
    {
      name: "Extra Stops",
      value: "extrastops",
    },
    {
      name: "Uplift",
      value: "uplift",
    },
    {
      name: "Texts",
      value: "texts",
    },
    {
      name: "Vias",
      value: "vias",
    },
  ];
  const data = [
    {
      name: "For the First",
      Debit: "SK036451D",
      Credit: "06/11/2014 23:59",
      NextDue: "7/11/2015 23:59",
    },
    {
      name: "Badge No.",
      Debit: "SK036451D",
      Credit: "06/11/2014 23:59",
      NextDue: "7/11/2015 23:59",
    },
    {
      name: "Driving License.",
      Debit: "SK036451D",
      Credit: "06/11/2014 23:59",
      NextDue: "7/11/2015 23:59",
    },
  ];
  return (
    <div className="modal__container">
      <div className="generic__modal formula--modal2">
        <Header title="Formula Properties" />
        <div className="formula--middle formula--details">
          <Input
            label="Formula Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder=""
            type="text"
            id="formula_id"
            visibility="visible"
          />
          <Select
            label="Statement Interval"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            data={docType}
            id="statementinterval"
            visibility="visible"
          />
          <Select
            label="Charged By"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            data={ChargedBy}
            id="chargedby"
            visibility="visible"
          />
          <div className="restriction__bottom formula--restriction">
            <h3>Formula Break Down</h3>
            <div className="table__main">
              <Table data={data} />
              <div className="form__bottom docs__table--footer second__bottom--footer formula--button">
                <button
                  onClick={() => {
                    onOpenModal("formulamodal");
                  }}
                >
                  Insert Above
                </button>
                <button onClick={() => onOpenModal("formulamodal")}>
                  Insert Below
                </button>
                <button
                  onClick={() => {
                    onOpenModal("deletechargezone");
                  }}
                >
                  Delete
                </button>
                <button onClick={() => onOpenModal("formulamodal")}>
                  Edit
                </button>
              </div>
            </div>
          </div>
          <InputLabel
            label="Test Formula"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            id="testmiles"
            labelText="Miles"
            placeholder="0"
            visibility="visible"
          />
          <Input
            label="will give £5.00"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="will give £5.00"
            type="text"
            id="formulatest"
            visibility="hidden"
          />
        </div>
        <hr className="line-bottom" />
        <Footer />
      </div>
    </div>
  );
}
FormulasProperties.propTypes = {
  onOpenModal: PropTypes.func,
};
export default FormulasProperties;
