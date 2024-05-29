import { useRef } from "react";
import SelectorModal from "@/component/modal/SelectorModal";

function ContextModal() {
  const scenarioContextModal = useRef([]);

  const contextWindow1 = [
    {
      name: "Add New Scenario",
      tag: "shortcutdetails",
    },
    {
      name: "Edit Scenario",
      tag: "deleteshortcut",
    },
    {
      name: "Delete Scenario",
      tag: "shortcutdetails",
    },
  ];
  //   const contextWindowRight = [
  //     {
  //       name: "Remove this Group from Scenario",
  //       tag: "shortcutdetails",
  //     },
  //   ];
  let nextScreen = "";
  const onPropertiesModal = (data, tag, modal) => {
    const results =
      data.length > 0 &&
      data.map((item, index) => (
        <li
          key={index}
          value={index}
          onClick={() => {
            modal.classList.add("hidden");
            if (item.tag !== "") {
              //   dispatch(onShowModal(item.tag, cPosition + 1));
            }
          }}
        >
          {item.name}
        </li>
      ));
    return results;
  };
  return (
    <div
      ref={scenarioContextModal}
      className="hidden"
      style={{ position: "absolute", top: "0" }}
    >
      <SelectorModal
        results={onPropertiesModal(
          contextWindow1,
          nextScreen,
          scenarioContextModal.current
        )}
        //   id={id}
        id="shortcut"
      />
    </div>
  );
}

export default ContextModal;
