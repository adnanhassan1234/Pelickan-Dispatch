import React from "react";

function MileageFareTable({
  mileageFareAdd,
  onChange,
  onDelete,
  onSubmit,
  tag,
  updateMileageFareData,
  onUpdateModal,
  onUpdate,
  onChangeUpdate,
  vehicleSelected,
  getOneMileage,
}) {
  return (
    <div className="driversmainDiv" style={{ padding: "10px" }}>
      <h1 style={{ padding: "10px" }}>
        {tag} Mileage Fare {vehicleSelected?.name}
      </h1>

      {tag === "Add" ? (
        <div>
          <div className="commonDiv">
            <label className="registrationWidth" style={{ marginLeft: "-5px" }}>
              From Miles
            </label>
            <input
              className="commonInput registerrationInput"
              name="from_miles"
              value={mileageFareAdd.from_miles}
              onChange={(e) => onChange(e)}
            />{" "}
          </div>
          <div className="commonDiv">
            <label className="registrationWidth" style={{ marginLeft: "-5px" }}>
              To Miles
            </label>
            <input
              className="commonInput registerrationInput"
              name="to_miles"
              value={mileageFareAdd.to_miles}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="commonDiv">
            <label className="registrationWidth" style={{ marginLeft: "-5px" }}>
              Fare
            </label>
            <input
              className="commonInput registerrationInput"
              name="fare"
              value={mileageFareAdd.fare}
              onChange={(e) => onChange(e)}
            />{" "}
          </div>
          <div className="commonDiv">
            <button className="addBtn" onClick={(e) => onSubmit(e)}>
              Add
            </button>{" "}
          </div>
        </div>
      ) : (
        <div>
          <div className="commonDiv">
            <label className="registrationWidth" style={{ marginLeft: "-5px" }}>
              From Miles
            </label>
            <input
              className="commonInput registerrationInput"
              name="from_miles"
              value={updateMileageFareData.from_miles}
              onChange={(e) => onChangeUpdate(e)}
            />{" "}
          </div>
          <div className="commonDiv">
            <label className="registrationWidth" style={{ marginLeft: "-5px" }}>
              To Miles
            </label>
            <input
              className="commonInput registerrationInput"
              name="to_miles"
              value={updateMileageFareData.to_miles}
              onChange={(e) => onChangeUpdate(e)}
            />
          </div>
          <div className="commonDiv">
            <label className="registrationWidth" style={{ marginLeft: "-5px" }}>
              Fare
            </label>
            <input
              className="commonInput registerrationInput"
              name="fare"
              value={updateMileageFareData.fare}
              onChange={(e) => onChangeUpdate(e)}
            />{" "}
          </div>
          <div className="commonDiv">
            <button className="addBtn" onClick={(e) => onUpdate(e)}>
              Update
            </button>{" "}
          </div>
        </div>
      )}
      <table className="tableDesign driverTable">
        <thead>
          <tr className="theadColor">
            {/* <th className="py-2 px-1">Id</th> */}
            <th className="py-2 px-1">From Miles</th>
            <th className="py-2 px-1">To Miles</th>
            <th className="py-2 px-1">Fare</th>

            <th className="py-2 px-1">Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          {getOneMileage?.map((item) => (
            <tr key={item?._id?.$oid} className="cursorPointer">
              <td>{item.from_miles}</td>
              <td>{item.to_miles}</td>
              <td>{item.fare}</td>

              <td className="icnosTd">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <span
                    className="updatelabel"
                    onClick={() =>
                      onUpdateModal(
                        item.from_miles,
                        item.to_miles,
                        item.fare,
                        item._id.$oid,
                        item.vehicle_id
                      )
                    }
                  >
                    <i className="fa-solid fa-pen-to-square editColor fontSizeIcons"></i>
                  </span>
                  <span
                    className="deletelabel"
                    onClick={() => onDelete(item._id.$oid, item.vehicle_id)}
                  >
                    <i className="fa-solid fa-trash fontSizeIcons deleteColor"></i>
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MileageFareTable;
