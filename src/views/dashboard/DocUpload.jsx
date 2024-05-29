import PopUp from "@/component/modal/PopUp";
import axios from "axios";
import { useState } from "react";
import Sidebar from "@/component/dashboard/Sidebar";
import Navbar from "@/component/dashboard/Navbar";

function DocUpload(props) {
  const [data, setData] = useState({
    file: "",
    image: "",
    type: "",
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
    // setFile(base64);
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

  const onSubmit = () => {
    const formData = new FormData();
    formData.append("driverId", Math.random().toString());
    formData.append("docType", data.type);
    formData.append("zipFiles", data.file.target.files[0]);

    const url = "/document/upload";

    const config = {
      method: "post",
      url: url,
      data: formData,
    };

    axios(config)
      .then(function (response) {
        setData({
          ...data,
          message: {
            status: response.data.success,
            msg: response.data.message,
            color: "green",
          },
        });
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };
  return (
    <>
      {data.message.status && <PopUp alert={[data.message]} />}
      <div className="d-flex-row">
        <div className="upload-contenter margin__width">
          <Navbar title="Upload Documents" />
          <div className="upload"></div>
          <div className="upload-down">
            <div className="u-text">
              <span>Upload Your Supporting Documents</span>
              <p>
                Please Upload Images of Documnets below. Some more info about
                required files
              </p>
            </div>
            <div className="upload-t">
              <span>Please select the document type</span>
            </div>
            <br />
            <div className="upload-check">
              {/* <div>
              <input type="radio" name="checkbox" id="idcard" value="id" />
              <label htmlFor="idcard"> National identity Card</label>
            </div> */}
              <select
                onChange={(e) => setData({ ...data, type: e.target.value })}
              >
                <option value="">Please Select</option>
                <option value="passport">Passport</option>
                <option value="drivinglicense">Driving License</option>
                <option value="bulk">Bulk Document Upload</option>
              </select>
              {/* <div>
              <input type="radio" name="checkbox" id="passport" value="pass" />
              <label htmlFor="passport"> Passport</label>
            </div> */}
              {/* <div>
              <input
                type="radio"
                name="checkbox"
                id="drivinglicense"
                value="dl"
              />
              <label htmlFor="drivinglicense"> Driving License</label>
            </div> */}
              {/* <div>
              <input
                type="radio"
                name="checkbox"
                id="bulkdocumentupload"
                value="bdu"
              />
              <label htmlFor="bulkdocumentupload"> Bulk Document Upload</label>
            </div> */}
            </div>
            <div className="upload-textarea">
              <div className="u-img">
                {data.image && <img src={data.image} alt={data} />}
              </div>
              <div className="drop-text">
                <span>Drop files here</span>
              </div>
              <div className="img-text">
                or
                <label htmlFor="fileupload" className="upload-link">
                  Browse File
                  <input type="file" id="fileupload" onChange={onChange} />
                </label>
                from your computer
              </div>
            </div>
            <div className="upload-btn">
              <button onClick={onSubmit}>
                <i className="fa-solid fa-upload"></i> Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocUpload;
