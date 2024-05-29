import PropTypes from "prop-types";
import Table from "@/component/form/Table";
import { useState } from "react";

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

function Docs({ onOpenModal }) {
  const [formData, setFormData] = useState({
    overdraft_limit: "",
    time_limit: "",
    number_count: "",
    licence_authority: "",
    notes_info: "",
  });

  const {
    overdraft_limit,
    time_limit,
    number_count,
    licence_authority,
    notes_info,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

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
      <form onSubmit={handleSubmit}>
        <div className="detail__top--doc">
          <div className="detail__input">
            <label htmlFor="overdraftlimit">Overdraft Limit (£)</label>
            <input
              id="overdraftlimit"
              name="overdraft_limit"
              value={overdraft_limit}
              onChange={handleChange}
              type="text"
              placeholder="00100"
              required
            />
          </div>
          <div className="detail__input">
            <label htmlFor="timelimitdays">Time Limit (days)</label>
            <input
              id="timelimitdays"
              name="time_limit"
              value={time_limit}
              onChange={handleChange}
              type="text"
              placeholder="00100"
              required
            />
          </div>
          <div className="detail__input">
            <label htmlFor="pin" style={{ visibility: "hidden" }}>
              .
            </label>
            <div className="docs__input--counter">
              <span>st:</span>
              <input
                id="pin"
                // name="st_count"
                // value={st_count}
                // onChange={handleChange}
                type="checkbox"
                placeholder="*****"
              />
              <input
                id=""
                name="number_count"
                value={number_count}
                onChange={handleChange}
                type="number"
              />
            </div>
          </div>

          <div className="detail__input col-3">
            <label htmlFor="licencesuthority">Licence Authority</label>
            <input
              id="licencesuthority"
              name="licence_authority"
              value={licence_authority}
              onChange={handleChange}
              type="text"
              placeholder=""
            />
          </div>
          <div className="detail__input">
            <label htmlFor="notes">Notes (for information only)</label>

            <textarea
              id="notes"
              name="notes_info"
              value={notes_info}
              onChange={handleChange}
              rows="4"
              cols="60"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}
Docs.propTypes = {
  onOpenModal: PropTypes.func,
};
export default Docs;
