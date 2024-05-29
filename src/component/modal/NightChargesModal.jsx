import PropTypes from "prop-types";

function NightChargesModal({ modalData, setModalData, onChange }) {
  console.log(modalData);
  return (
    <div className={`all-contenter ${!modalData.status ? "hidden" : ""}`}>
      <div className="night-chrages">
        <span
          onClick={() => {
            setModalData({
              ...modalData,
              status: false,
            });
          }}
          className="close"
        >
          &times;
        </span>
        <div className="n-title">
          <span>Night Charges</span>
        </div>
        {/* <div className="select-text">
          <span>Select Fleet:</span>
        </div>
        <div className="fleet">
          <div>
            <select name="" id="">
              <option value="GBC Cars">Britannia Airport Cars</option>
              <option value="GBC Cars">GBC Cars</option>
              <option value="GBC Cars">Pelickan Cars</option>
              <option value="GBC Cars">Getwic Cars</option>
            </select>
          </div>
        </div>
        <div className="time">
          <div>
            <span>From Time:</span>
            <br />
            <div className="ftime">
              <input type="time" />
            </div>
          </div>
          <div>
            To Time:
            <div className="ftime">
              <input type="time" />
            </div>
          </div>
        </div>
        <div className="amount-p">
          <label htmlFor="amount"> Is Amount Wise:</label>
          <br />
          <input id="amount" type="checkbox" />
        </div> */}
        <div className="amount-p">
          <label htmlFor="title"> Is Amount Wise:</label>
          <br />
          <input
            style={{ width: "100%" }}
            id="title"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className="night-btn">
          <button
            onClick={() => {
              setModalData({
                ...modalData,

                status: false,
              });
            }}
          >
            Save Night Charges
          </button>
        </div>
      </div>
    </div>
  );
}
NightChargesModal.propTypes = {
  modalData: PropTypes.object,
  setModalData: PropTypes.any,
};
export default NightChargesModal;
