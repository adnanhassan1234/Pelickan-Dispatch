import { useState } from "react";
import PropTypes from "prop-types";

const VehicleModal = ({ setModal, getModal }) => {
  const [data, setData] = useState({
    file: "",
    image: "",
    message: {
      status: false,
      msg: "",
      color: "",
    },
  });

  const onChange = async (file) => {
    setData({
      ...data,
      file,
      image: await convertBase64(file.target.files[0]),
    });
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const { status, getdata } = getModal;
  return (
    <div id="myModal" className={`${status ? "" : "hidden"} modal`}>
      <div className="v--modal---contenter">
        <div className="v--main--content--ms">
          <span
            className="close"
            onClick={() => {
              setModal({
                status: false,
                getdata: {},
              });
            }}
          >
            &times;
          </span>
          <div className="v--title">
            <span>Vehicle Setup Screen</span>
          </div>
          <div className="v--name">
            <label htmlFor="vehiclename">Vehicle Name</label>
            <br />
            <input type="text" />
          </div>
          <div className="v--input--text--ms">
            <div className="v--left--ms">
              <div className="v--1st--ms v--name">
                <label htmlFor="vehiclename">Number of Hand Luggage</label>
                <br />
                <input type="text" />
              </div>
              <div className="v--1st--ms v--name">
                <label htmlFor="vehiclename">Number of Luggage</label>
                <br />
                <input type="text" />
              </div>
              <div className="v--1st--ms v--name">
                <label htmlFor="vehiclename">Number of Passengers</label>
                <br />
                <input type="text" />
              </div>
            </div>
            <div className="v--right--ms">
              <label htmlFor="fileupload" className="upload-link">
                {data.image ? (
                  <img src={data.image} alt={data} width="100%" />
                ) : (
                  <img src="@/assets/upload.png" alt="" />
                )}
                <input type="file" id="fileupload" onChange={onChange} />
              </label>
              <label htmlFor="fileupload" className="upload-link up--img">
                Change Image
                <input type="file" id="fileupload" onChange={onChange} />
              </label>
            </div>
          </div>
          <div className="isdefault--v">
            <div className="is--check">
              <label htmlFor="default"> Is Default</label>{" "}
              <input id="checkbox" type="checkbox" />
            </div>

            <div className="v--CS__btn">
              <button>CANCLE</button>
              <button>SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
VehicleModal.PropTypes = {
  getModal: PropTypes.object,
  setModal: PropTypes.any,
};
export default VehicleModal;
