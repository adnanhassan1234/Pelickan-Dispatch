import React from "react";
import { useState } from "react";

const AddDocument = ({ showDocumentModal, setDocumentModal }) => {
  const [documentData, setDocumentData] = useState({
    document_name: "",
    document_type: "",
    page_count: "",
    width: "",
    height: "",
  });
  let { document_name, document_type, page_count, width, height } =
    documentData;
  const documentFormData = (e) => {
    setDocumentData({ ...documentData, [e.target.name]: e.target.value });
  };
  return (
    <>
      {showDocumentModal && (
        <div className="vehiclemainDiv">
          <form className="formDesign">
            <div className="commonDiv">
              <label className="comonLblmrgn">Document Name:</label>
              <input
                type="text"
                name="document_name"
                value={document_name}
                className="commonInput"
                onChange={documentFormData}
                style={{ marginLeft: "35px" }}
              />
            </div>
            <div className="commonDiv">
              <label className="comonLblmrgn" style={{ marginLeft: "-10px" }}>
                Document Type:
              </label>
              <input
                type="text"
                name="document_type"
                value={document_type}
                className=" psoMarginInput"
                onChange={documentFormData}
                style={{ marginLeft: "45px" }}
              />
            </div>

            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Page Count:
              </label>
              <input
                type="text"
                name="page_count"
                value={page_count}
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                onChange={documentFormData}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Width:
              </label>
              <input
                type="text"
                name="width"
                value={width}
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                onChange={documentFormData}
              />
            </div>
            <div className="commonDiv">
              <label
                className="registrationWidth"
                style={{ marginLeft: "-5px" }}
              >
                Height:
              </label>
              <input
                type="text"
                name="height"
                value={height}
                className="commonInput registerrationInput"
                style={{ marginLeft: "35px" }}
                onChange={documentFormData}
              />
            </div>
            {/* <div className="commonDiv">
              <label className="nameLbl comonLblmrgn">Delete:</label>
             
              <select
                className="commonInput"
                name="fleet"
                style={{ marginLeft: "55px" }}
              >
                <option>Deleted</option>
                <option>Not Deleted</option>
              </select>
            </div>
            <div className="commonDiv">
              <label className="nameLbl comonLblmrgn">Active:</label>
            
              <select
                className="commonInput"
                name="fleet"
                style={{ marginLeft: "55px" }}
              >
                <option>Active</option>
                <option>Not Active</option>
              </select>
            </div> */}
          </form>
          <div className="btnVehicleDiv">
            <button className="btnDesignDriver">Add</button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => setDocumentModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddDocument;
