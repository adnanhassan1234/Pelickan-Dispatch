import PropTypes from "prop-types";
import Table from "@/component/form/Table";
import InputSingle from "@/component/form/InputSingle";
function Overrides({ onOpenModal }) {
  const data = [
    {
      Parameter: "National Insurance No.",
      Override: "SK036451D",
      System: "N",
    },
    {
      Parameter: "Badge No.",
      Override: "SK036451D",
      System: "N",
    },
    {
      Parameter: "Driving License.",
      Override: "SK036451D",
      System: "N",
    },
    {
      Parameter: "National Identity.",
      Override: "SK036451D",
      System: "N",
    },
    {
      Parameter: "National Identity.",
      Override: "SK036451D",
      System: "N",
    },
    {
      Parameter: "National Identity.",
      Override: "SK036451D",
      System: "N",
    },
    {
      Parameter: "National Identity.",
      Override: "SK036451D",
      System: "N",
    },
    {
      Parameter: "National Identity.",
      Override: "SK036451D",
      System: "N",
    },
    {
      Parameter: "National Identity.",
      Override: "SK036451D",
      System: "N",
    },
    {
      Parameter: "National Identity.",
      Override: "SK036451D",
      System: "N",
    },
    {
      Parameter: "National Identity.",
      Override: "SK036451D",
      System: "N",
    },
    {
      Parameter: "National Identity.",
      Override: "SK036451D",
      System: "N",
    },
  ];
  return (
    <div className="override__container">
      {/* {getState.tag.value === "Overrides" && (
        <OverrideModal onCloseModal={onCloseModal} />
      )} */}

      <div className="override__bottom">
        <InputSingle
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          type="text"
          id="search"
          placeholder="Search...."
          visibility="visible"
        />
        <div className="table__main ">
          <Table data={data} onOpenModal={onOpenModal} value="Overrides" />
          <div className="form__bottom second__bottom--footer">
            <button type="submit" onClick={() => {}}>
              Remove
            </button>
            <button
              type="submit"
              onClick={() => {
                onOpenModal("overrides");
              }}
            >
              New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
Overrides.propTypes = {
  onCloseModal: PropTypes.func,
  onOpenModal: PropTypes.func,
  getState: PropTypes.object,
};
export default Overrides;
