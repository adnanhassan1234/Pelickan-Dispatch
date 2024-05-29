import { onUploadDriversDoc } from "@/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "@/component/dashboard/Navbar";
import Spinner from "@/component/spinners/Spinner";
import onResetAlert from "@/utils/resetAlert";
function DocUpload() {
  const dispatch = useDispatch();
  const [err, setErr] = useState({});
  const { loading } = useSelector((state) => state.drivers);
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
      file: file.target.files[0],
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

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      driverId: Math.random() * 3,
      docType: data.type,
      zipFiles: data.file,
    };
    const err = onValidate(payload);
    setErr(err);
    if (Object.keys(err).length === 0) {
      onResetAlert(dispatch);
      dispatch(onUploadDriversDoc(payload));
    }
  };
  const onValidate = (values) => {
    let error = {};
    if (!values.zipFiles) {
      error.zipFiles = "*File is required";
    }
    // if (!values.docType) {
    //   error.docType = "*Document Type is Required";
    // }
    return error;
  };
  return (
    <div className="upload-contenter">
      <div className="upload"></div>
      <div className="upload-down">
        <div className="u-text">
          <span>Upload Your Supporting Documents</span>
          <p>
            Please Upload Images of Documnets below. Some more info about
            required files
          </p>
        </div>
        <br />
        <form onSubmit={onSubmit} className="">
          {/* <div className="__form">
            <label className="upload-t" htmlFor="type">
              Please select the document type
            </label>

            <select
              id="type"
              onChange={(e) => setData({ ...data, type: e.target.value })}
            >
              <option value="">Please Select</option>
              <option value="passport">Passport</option>
              <option value="drivinglicense">Driving License</option>
              <option value="bulk">Bulk Document Upload</option>
            </select>
            <span>{err.docType}</span>
          </div> */}
          <div className="upload-textarea">
            <img src="@/assets/uimag.png" alt="" width="80px" />
            <div className="drop-text">
              <span style={{ color: !err.zipFiles ? "black" : "red" }}>
                {!data.file.name ? "Drop files here" : data.file.name}
              </span>
            </div>
            <div className="img-text">
              or
              <label htmlFor="fileupload" className="upload-link">
                Browse File
                <input
                  type="file"
                  id="fileupload"
                  onChange={onChange}
                  accept=".zip,.rar,.7zip"
                />
              </label>
              from your computer
            </div>
          </div>
          <div className="upload-btn">
            <button disabled={loading}>
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <i className="fa-solid fa-upload"></i> Upload
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DocUpload;
