import { onShowModal } from "@/actions";
import GenericTable from "@/component/driver/main/GenericTable";
import Footer from "@/component/driver/module/modals/modalcomponent/Footer";
import Header from "@/component/driver/module/modals/modalcomponent/Header";

import Input from "@/component/form/Input";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function Groups() {
  const tableRef = useRef(null);
  const data = [
    {
      Check: "Y",
      Shortcut: "ABBEY WOOD",
      Displayed_Name: "Aberdeen Airport",
    },
    {
      Check: "N",
      Shortcut: "Hotels",
      Displayed_Name: "SK036451D",
    },
    {
      Check: "Y",
      Shortcut: "Stations",
      Displayed_Name: "SK036451D",
    },
    { Check: "Y", Shortcut: "Stations", Displayed_Name: "" },
    {
      Check: "N",
      Shortcut: "Stations",
      Displayed_Name: "SK036451D",
    },
    {
      Check: "Y",
      Shortcut: "Stations",
      Displayed_Name: "SK036451D",
    },
    {
      Check: "Y",
      Shortcut: "Stations",
      DisplayedName: "SK036451D",
    },
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
        <div className="generic__middle groups__middle">
          <div className="group__middle--top">
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
            <Input
              label="Premise"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              placeholder="enter premise"
              type="text"
              id="premise"
              visibility="visible"
            />
            <Input
              label="Description"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              placeholder="enter description"
              type="text"
              id="description"
              visibility="visible"
            />
          </div>
          <Footer />
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

export default Groups;
