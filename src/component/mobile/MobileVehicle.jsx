import PropTypes from "prop-types";
import Input from "../form/Input";

function MobileVehicle({ onOpenModal }) {
  const data = [
    {
      name: "SBC082",
      fullname: "Haris Arshad",
    },
    {
      name: "babu bhiya",
      fullname: "mastana",
    },
  ];
  return (
    <>
      <div className="detail__middle">
        <div className="vdetail__top--form">
          <Input
            label="Vehicle Name"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="V-SBC082-1"
            type="text"
            id="namevehicle"
            visibility="visible"
          />
          <Input
            label="Registration Number"
            // onChange={onChange}
            // name="reminderperiod"
            // value=""
            placeholder="YT66JPF"
            type="text"
            id="regnumber"
            visibility="visible"
          />

          <div className="detail__input col-4"></div>
        </div>
      </div>
      <h2>Allowed Drivers:</h2>
      <div className="docs__container m--table__container">
        <div className="table__main docs__table mobile--table">
          <table>
            <thead>
              <tr className="drivert-row">
                <th>Name</th>
                <th>Full Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((itm, ind) => (
                <tr key={ind} className="drivert-row">
                  <td>{itm.name}</td>
                  <td>{itm.fullname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
MobileVehicle.propTypes = {
  onOpenModal: PropTypes.func,
};
export default MobileVehicle;
