import React, { useState } from "react";
import axios from "axios";
import DeleteModel from "../../Delete";

const VehiclesData = ({
  vehicleData,
  setOpenVehicle,
  setAddUpdateBtnVle,
  getRowData,
  getVehicle,
}) => {
  const [vehicleModelCheck, setVehcileModelCheck] = useState(false);
  const [selectVehicleDeleteRowId, setSelectVehicleDeleteRowId] = useState();
  const [openDeleteModel, setOpenDeleteModel] = useState(false);
  const toHideLargeData = (item) => {
    if (item?.length > 15) {
      return item.slice(0, 15) + "...";
    } else {
      return item;
    }
  };
  const getSpecificRowData = (rowdata) => {
    setOpenVehicle(true);
    setAddUpdateBtnVle("Update");
    getRowData(rowdata);
    console.log(rowdata);
  };
  const deleteSpecificRow = async (vehicleId) => {
    console.log(vehicleId);
    setOpenDeleteModel(true);
    setVehcileModelCheck(true);
    setSelectVehicleDeleteRowId(vehicleId);
  };
  let vehicleId = { vehicle_id: "" };
  const deleteVehicleSelectedRow = async (vehicle_id) => {
    vehicleId = {
      vehicle_id: vehicle_id,
    };
    try {
      const result = await axios.put(
        `https://api.test.pelickandespatch.com:8443/vehicle/delete-vehicle`,
        vehicleId,
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
  };

  return (
    <div className="driversmainDiv">
      <DeleteModel
        deleteVehicleSelectedRow={deleteVehicleSelectedRow}
        openDeleteModel={openDeleteModel}
        vehicleModelCheck={vehicleModelCheck}
        setOpenDeleteModel={setOpenDeleteModel}
        selectVehicleDeleteRowId={selectVehicleDeleteRowId}
      />
      <table className="tableDesign vehicleTable">
        <thead>
          <tr className="theadColor">
            <th>Vehicle Name</th>
            <th>Status</th>
            <th>Fleet</th>
            <th>Registration No</th>
            <th>Make</th>
            <th>Model</th>
            <th>Color</th>
            <th>CO2 Emissions (g/km)</th>
            <th>PSV Licence No</th>
            <th>PSO Certicate No</th>
            <th>Licence Authority</th>
            <th>Lock Down Code</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {vehicleData?.map((item, ind) => {
            return (
              <tr className="cursorPointer" key={ind}>
                <td>{item.vehicleName}</td>
                <td>{item.status === true ? "Active" : "In Active"}</td>
                <td>{item.fleet}</td>
                <td>{toHideLargeData(item.registrationNo)}</td>
                <td>{item.make}</td>
                <td>{item.model}</td>
                <td>{item.colour}</td>
                <td>{item.co2Emission}</td>
                <td>{item.psvLicenceNo}</td>
                <td>{item.pcoCertificateNo}</td>
                <td>{item.licenceAuthority}</td>
                <td>{item.lockDownCode}</td>
                <td title={item.notes}>{toHideLargeData(item.notes)}</td>
                <td className="icnosTd">
                  {item && (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <span
                        className="updatelabel"
                        onClick={() => getSpecificRowData(item)}
                      >
                        <i className="fa-solid fa-pen-to-square editColor fontSizeIcons"></i>
                      </span>
                      <span
                        className="deletelabel"
                        onClick={() => deleteSpecificRow(item.id)}
                      >
                        <i className="fa-solid fa-trash fontSizeIcons deleteColor"></i>
                      </span>
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VehiclesData;
