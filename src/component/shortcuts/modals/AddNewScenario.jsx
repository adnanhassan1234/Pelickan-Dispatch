import { onShowModal } from "@/actions";
import GenericTable from "@/component/driver/main/GenericTable";
import Footer from "@/component/driver/module/modals/modalcomponent/Footer";
import Header from "@/component/driver/module/modals/modalcomponent/Header";

import Input from "@/component/form/Input";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function AddNewScenario() {
  const tableRef = useRef(null);
  const data = [
    {
      Check: "Y",
      Name: "Airport",
      Premise: "SK036451D",
      Description: "06/11/2014 23:59",
    },
    {
      Check: "N",
      Name: "Hotels",
      Premise: "SK036451D",
      Description: "06/11/2014 23:59",
    },
    {
      Check: "Y",
      Name: "Stations",
      Premise: "SK036451D",
      Description: "06/11/2014 23:59",
    },
    { Check: "Y", Name: "Stations", Premise: "", Description: "" },
    {
      Check: "N",
      Name: "Stations",
      Premise: "SK036451D",
      Description: "06/11/2014 23:59",
    },
    {
      Check: "Y",
      Name: "Stations",
      Premise: "SK036451D",
      Description: "06/11/2014 23:59",
    },
    { Check: "Y", Name: "Stations", Premise: "SK036451D", Description: "" },
  ];
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const onListenEvents = (list, details) => {
    if (list.tag !== "") {
      dispatch(onShowModal(list.tag, modal.cPosition + 1));
    }
  };
  return (
    <div className="modal__container">
      <div className="generic__modal">
        <Header title="Add New Scenario" />
        <div className="generic__middle scenario__middle">
          <div className="scenario__middle--top">
            <Input
              label="Scenario Name"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              placeholder="enter scenario name"
              type="text"
              id="scenarioname"
              visibility="visible"
            />
            <Footer />
          </div>
          <GenericTable
            data={data}
            properties={[]}
            id="logs"
            nextScreen=""
            tableRef={tableRef}
            tableLength={7}
            onListenEvents={onListenEvents}
          />
        </div>
      </div>
    </div>
  );
}

export default AddNewScenario;
