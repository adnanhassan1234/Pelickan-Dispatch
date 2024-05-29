import React from "react";

function PromotionModal() {
  return (
    <>
      <div
        className={`modal ${modalStatus ? "d-flex promotion-modal" : "hidden"}`}
      >
        <div className="main__modal bg-white d-flex-column p-2">
          <div className="modal-header">
            <h2>Promotion Charges</h2>
            <i
              onClick={() => {
                setSelectedDoc({ data: {}, modalStatus: false });
              }}
              className="fas fa-times-circle f-24"
              id="closeModalIcon"
            ></i>
          </div>
          <div className="modal-body ">
            <div className="d-flex-column flex-wrap gap-1 py-1">
              <label>Select Fleet</label>
              <select>
                <option>Britannia Airport Cars</option>
                <option>Great Britain Cars</option>
                <option>Sky Bridge Cars</option>
              </select>
            </div>
            <div className="d-flex gap-1 py-1 w-100 justify-space-between">
              <div className="d-flex-column gap-1 ">
                <label>Starting Time:</label>
                <input
                  type="time"
                  id="starting-time"
                  className="promotion-time"
                />
              </div>
              <div className="d-flex-column gap-1">
                <label>Ending Time:</label>
                <input
                  type="time"
                  id="ending-time"
                  className="promotion-time"
                />
              </div>
            </div>
            <div className="d-flex-column flex-wrap gap-1 py-1">
              <label> Price / Percentage </label>
              <input type="number" for="price" />
            </div>
            <div className="d-flex align-center gap-1">
              <label for="amount-wi">is amount wise</label>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
            </div>
          </div>
          <div className="modal-footer text-end py-1">
            <button className="btn promotion-btn px-1">
              Add Promotion Charges
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PromotionModal;
