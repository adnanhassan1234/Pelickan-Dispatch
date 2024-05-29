import PropTypes from "prop-types";
import Table from "@/component/form/Table";

function VDocuments({ onOpenModal }) {
  const data = [
    {
      name: "National Insurance No.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
      expirydate: "7/11/2015 23:59",
      trackexpiry: "N",
    },
    {
      name: "Badge No.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
      expirydate: "7/11/2015 23:59",
      trackexpiry: "Y",
    },
    {
      name: "Driving License.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
      expirydate: "7/11/2015 23:59",
      trackexpiry: "Z",
    },
    {
      name: "National Identity.",
      value: "SK036451D",
      startdate: "06/11/2014 23:59",
      expirydate: "7/11/2015 23:59",
      trackexpiry: "A",
    },
  ];
  return (
    <div className="docs__container table__main">
      <Table data={data} nextScreen="" />

      <div className="form__bottom second__bottom--footer">
        <button
          type="submit"
          onClick={() => {
            onOpenModal("document");
          }}
        >
          New
        </button>
        <button type="submit" onClick={() => {}}>
          Delete
        </button>
        <button
          type="submit"
          onClick={() => {
            onOpenModal("document");
          }}
        >
          Edit
        </button>
      </div>
      {/* <div className="detail__top--doc">
        <div className="detail__input">
          <label htmlFor="overdraftlimit">Overdraft Limit (£)</label>
          <input id="overdraftlimit" type="text" placeholder="00100" />
        </div>
        <div className="detail__input">
          <label htmlFor="timelimitdays">Time Limit (days)</label>
          <input id="timelimitdays" type="text" placeholder="00100" />
        </div>
        <div className="detail__input">
          <label htmlFor="pin" style={{ visibility: "hidden" }}>
            .
          </label>
          <div className="docs__input--counter">
            <span>st:</span>
            <input id="pin" type="checkbox" placeholder="*****" />
            <input id="" type="number" />
          </div>
        </div>

        <div className="detail__input col-3">
          <label htmlFor="licencesuthority">Licence Authority</label>
          <input id="licencesuthority" type="text" placeholder="" />
        </div>
     
      </div> */}
    </div>
  );
}
VDocuments.propTypes = {
  onOpenModal: PropTypes.func,
};
export default VDocuments;
