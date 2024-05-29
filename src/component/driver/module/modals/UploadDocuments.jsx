import Header from "./modalcomponent/Header";
import Footer from "./modalcomponent/Footer";
import Paragraph from "@/component/form/Paragraph";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import onResetAlert from "@/utils/resetAlert";
import { onUploadDriversDoc } from "@/actions";
import upload from "@/assets/uploadcloud.png";
import { DeleteFileIcon, ZipFileIcon } from "@/assets/svg/Svg";
function UploadDocuments() {
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

    return error;
  };

  function formatBytes(a, b = 2) {
    if (!+a) return "0 Bytes";
    const c = 0 > b ? 0 : b,
      d = Math.floor(Math.log(a) / Math.log(1024));
    return `${parseFloat((a / Math.pow(1024, d)).toFixed(c))} ${
      ["Bytes", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"][d]
    }`;
  }
  const onResetImage = () => {
    setData({
      ...data,
      file: "",
    });
  };
  return (
    <div className="modal__container">
      <div className="generic__modal">
        <Header title="Upload Documents" />
        <div className="generic__middle upload__middle">
          <Paragraph
            label="Upload Your Supporting Documents"
            text="Please Upload Images of documents below. Some more info about required files"
            id="uploaddoc"
            visibility="visible"
          />

          <div className="upload-textarea">
            <img src={upload} alt="" />
            <div className="drop-text">
              <p style={{ color: !err.zipFiles ? "black" : "red" }}>
                Choose a file
                {/* or drag & drop it here */}
              </p>
              <p>.zip, .rar, .7zip</p>
            </div>
            <div className="img-text">
              <label htmlFor="fileupload">Browse File</label>
              <input
                onChange={onChange}
                id="fileupload"
                type="file"
                accept=".zip,.rar,.7zip"
              />
            </div>
          </div>
          {data.file.name && (
            <div className="file__bar">
              <ZipFileIcon />
              <div>
                <span>{data.file.name}</span>
                <span>{formatBytes(data.file.size)}</span>
              </div>
              <span onClick={onResetImage}>
                <DeleteFileIcon />
              </span>
            </div>
          )}
        </div>
        <Footer
          onSubmit={onSubmit}
          buttons={[
            {
              title: "Upload",
              event: onSubmit,
              loading,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default UploadDocuments;
