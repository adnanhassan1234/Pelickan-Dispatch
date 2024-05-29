import axios from "axios";
import React, { useEffect, useState } from "react";

const AddVehicle = ({
  openVehicle,
  setOpenVehicle,
  addUpdateBtn,
  rowData,
  getVehicle,
}) => {
  let [vehicleData, setVehicle] = useState({
    vehicleName: "",
    status: "",
    fleet: "",
    registrationNo: "",
    make: "",
    model: "",
    colour: "",
    co2Emission: "",
    psvLicenceNo: "",
    pcoCertificateNo: "",
    licenceAuthority: "",
    lockDownCode: "",
    notes: "",
  });
  let {
    vehicleName,
    status,
    fleet,
    registrationNo,
    make,
    model,
    colour,
    co2Emission,
    psvLicenceNo,
    pcoCertificateNo,
    licenceAuthority,
    lockDownCode,
    notes,
  } = vehicleData;
  const vehicleFormValue = (e) => {
    console.log("this");
    setVehicle({ ...vehicleData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setVehicle({
      vehicle_id: rowData?.id,
      vehicleName: rowData?.vehicleName,
      status: rowData?.status,
      fleet: rowData?.fleet,
      registrationNo: rowData?.registrationNo,
      make: rowData?.make,
      model: rowData?.model,
      colour: rowData?.colour,
      co2Emission: rowData?.co2Emission,
      psvLicenceNo: rowData?.psvLicenceNo,
      pcoCertificateNo: rowData?.pcoCertificateNo,
      licenceAuthority: rowData?.licenceAuthority,
      lockDownCode: rowData?.lockDownCode,
      notes: rowData?.notes,
    });
    console.log(rowData);
  }, [rowData]);
  useEffect(() => {
    if (addUpdateBtn === "Add") {
      console.log(addUpdateBtn);
      setVehicle({
        vehicleName: "",
        status: "",
        fleet: "",
        registrationNo: "",
        make: "",
        model: "",
        colour: "",
        co2Emission: "",
        psvLicenceNo: "",
        pcoCertificateNo: "",
        licenceAuthority: "",
        lockDownCode: "",
        notes: "",
      });
    }
  }, [addUpdateBtn]);
  const addUpdateVehicleData = async () => {
    if (addUpdateBtn === "Add") {
      console.log("add vehicle");
      console.log(vehicleData);
      try {
        const result = await axios.post(
          `https://api.test.pelickandespatch.com:8443/vehicle/add-vehicle`,
          vehicleData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(result);
      } catch (err) {
        console.log(err);
      }
      getVehicle();
      setOpenVehicle(false);
    }
    if (addUpdateBtn === "Update") {
      console.log("vehicle update");
      console.log(vehicleData);
      try {
        const result = await axios.put(
          `https://api.test.pelickandespatch.com:8443/vehicle/update-vehicle`,
          vehicleData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(result);
      } catch (err) {
        console.log(err);
      }
      getVehicle();
    }
    setOpenVehicle(false);
  };
  return (
    <>
      {openVehicle && (
        <div className="vehiclemainDiv">
          <form className="formDesign">
            <div className="vehicleNameDiv">
              <label className="nameLbl">Vehicle Name:</label>
              <input
                type="text"
                onChange={vehicleFormValue}
                name="vehicleName"
                value={vehicleName ?? ""}
                className="vehiclNameInput"
              />
            </div>
            <div className="statusDiv">
              <label className="nameLbl statusMargin">Status:</label>
              <select
                className="statusDropdown"
                onChange={vehicleFormValue}
                name="status"
                value={status ?? ""}
              >
                <option>true</option>
                <option>false</option>
              </select>
              <label className="displayLbl">Display</label>
            </div>
            <div className="commonDiv">
              <label className="nameLbl comonLblmrgn">Fleet:</label>
              {/* <input type="text" className="commonInput" /> */}
              <select
                className="commonInput"
                onChange={vehicleFormValue}
                name="fleet"
                value={fleet ?? ""}
              >
                <option>BAC</option>
                <option>Qmc</option>
              </select>
            </div>
            <div className="commonDiv">
              <label className="nameLbl comonLblmrgn registrationWidth">
                Registration No:
              </label>
              <input
                type="text"
                name="registrationNo"
                value={registrationNo ?? ""}
                onChange={vehicleFormValue}
                className="commonInput registerrationInput"
              />
            </div>
            <div className="commonDiv">
              <label className="nameLbl comonLblmrgn">Make:</label>
              <input
                type="text"
                name="make"
                value={make ?? ""}
                onChange={vehicleFormValue}
                className="commonInput"
              />
            </div>
            <div className="commonDiv">
              <label className="nameLbl comonLblmrgn">Model:</label>
              <input
                type="text"
                name="model"
                value={model ?? ""}
                onChange={vehicleFormValue}
                className="commonInput"
              />
            </div>
            <div className="colorEmissionDiv">
              <label className="colorEmissionLbl">Color:</label>
              <input
                type="text"
                name="colour"
                value={colour ?? ""}
                onChange={vehicleFormValue}
                className="colorEmissionInput"
              />
            </div>
            <div className="colorEmissionDiv">
              <label className="colorEmissionLbl">CO2 Emissions (g/km):</label>
              <input
                type="text"
                name="co2Emission"
                value={co2Emission ?? ""}
                onChange={vehicleFormValue}
                className="colorEmissionInput"
              />
            </div>
            <div className="commonDiv">
              <label className="comonLblmrgn">PSV Licence No:</label>
              <input
                type="text"
                name="psvLicenceNo"
                onChange={vehicleFormValue}
                value={psvLicenceNo ?? ""}
                className="commonInput"
              />
            </div>
            <div className="commonDiv">
              <label className="comonLblmrgn">PSO Certicate No:</label>
              <input
                type="text"
                name="pcoCertificateNo"
                onChange={vehicleFormValue}
                value={pcoCertificateNo ?? ""}
                className=" psoMarginInput"
              />
            </div>
            <div className="commonDiv">
              <label className="lincenceLbl">Licence Authority:</label>
              <select
                className="licenceDropdown"
                name="licenceAuthority"
                onChange={vehicleFormValue}
                value={licenceAuthority ?? ""}
              >
                <option>None</option>
                <option>This</option>
              </select>
            </div>
            <div className="commonDiv">
              <label className="comonLblmrgn">Lock Down Code:</label>
              <input
                type="text"
                name="lockDownCode"
                value={lockDownCode ?? ""}
                onChange={vehicleFormValue}
                className="psoMarginInput"
              />
            </div>
            <div className="vehicleNameDiv">
              <label className="nameLbl">Notes:</label>
              <textarea
                name="notes"
                value={notes ?? ""}
                onChange={vehicleFormValue}
                cols={5}
                rows={5}
                className="vehiclNameInput"
              />
            </div>
          </form>
          <div className="btnVehicleDiv">
            <button className="btnDesignDriver" onClick={addUpdateVehicleData}>
              {addUpdateBtn}
            </button>
            <button
              className="btnDesignDriverCancel"
              onClick={() => setOpenVehicle(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AddVehicle;
