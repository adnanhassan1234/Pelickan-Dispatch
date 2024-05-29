import React, { useState } from "react";
import DocumentData from "./DocumentData";
import AddDocument from "./AddDocument";
import EditDocument from "./EditDocument";

const Document = ({ showDocumentTab }) => {
  const [showDocumentModal, setDocumentModal] = useState(false);
  const [showEditDocumentModal, setEditDocumentModal] = useState(false);
  return (
    <>
      {showDocumentTab && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <button
              className="addBtn"
              onClick={() => setDocumentModal(!showDocumentModal)}
            >
              Add Document
            </button>
            <label className="underlineInTable"></label>
            <AddDocument
              showDocumentModal={showDocumentModal}
              setDocumentModal={setDocumentModal}
            />
            <EditDocument
              showEditDocumentModal={showEditDocumentModal}
              setEditDocumentModal={setEditDocumentModal}
            />

            <DocumentData setEditDocumentModal={setEditDocumentModal} />
            {/* <AddDriver
              openDriver={openDriver}
              setOpenDriver={setOpenDriver}
              addUpdateBtn={addUpdateBtn}
              rowData={rowData}
              getDriver={getDriver}
            />
            <DriversData
              driverData={driverData}
              setAddUpdateBtnVle={setAddUpdateBtnVle}
              getRowData={getRowData}
              setOpenDriver={setOpenDriver}
              getDriver={getDriver}
            /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Document;
