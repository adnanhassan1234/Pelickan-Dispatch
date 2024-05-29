import PropTypes from "prop-types";

function DocumentModal({ selectedDoc, setSelectedDoc }) {
  const { data, modalStatus } = selectedDoc;
  return (
    <div className={`modal ${modalStatus ? "d-flex" : "hidden"}`}>
      <div className="main__modal">
        <div className="modal-header">
          <div className="d-flex align-center justify-space-between px-1">
            <h2>Details</h2>
            <i
              onClick={() => {
                setSelectedDoc({ data: {}, modalStatus: false });
              }}
              className="fas fa-times-circle f-24"
              id="closeModalIcon"
            ></i>
          </div>
        </div>
        <div className="modal-container">
          {/* <div className="doc-image">
          <img src="/Media/Graph.png" />
        </div> */}

          <div className="doc-details m-2">
            <table className="w-100 tab p-1">
              <thead>
                <tr>
                  <th scope="col">Field</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  Object.keys(data).map((itm, ind) => (
                    <tr key={ind}>
                      <td style={{ textTransform: "capitalize" }}>
                        {itm.split("_").join(" ")}
                      </td>
                      <td>{Object.values(data)[ind]}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
DocumentModal.propTypes = {
  selectedDoc: PropTypes.object,
  setSelectedDoc: PropTypes.any,
};
export default DocumentModal;
