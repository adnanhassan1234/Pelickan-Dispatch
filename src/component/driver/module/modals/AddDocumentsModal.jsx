import Header from "./modalcomponent/Header";
import Input from "@/component/form/Input";
import InputLabel from "@/component/form/InputLabel";
import CheckBoxSingle from "@/component/form/CheckBoxSingle";
import Footer from "./modalcomponent/Footer";
import SelectInput from "@/component/form/SelectInput";
import { useState } from "react";
import {
  DeleteFileIcon,
  DriverUploadDoc,
  DriverUploadFile,
} from "@/assets/svg/Svg";

function AddDocumentsModal() {
  const [formData, setFormData] = useState({
    reminderDays: "",
    reminderHours: "",
    documentValue: "",
    documentValidity: "",
    sDate: "",
    sTime: "",
    eDate: "",
    eTime: "",
  });

  const {
    reminderDays,
    reminderHours,
    documentValue,
    documentValidity,
    sDate,
    sTime,
    eDate,
    eTime,
  } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const docType = [
    {
      name: "Driving License No",
      value: "drivinglicenseno",
    },
    {
      name: "CRB/Disclosure",
      value: "crb-disclosure",
    },
    {
      name: "Special Document No",
      value: "specialdocumentno",
    },
    {
      name: "PCO Certificate No",
      value: "pcocertificateno",
    },
  ];

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

  const onChangeImage = async (file) => {
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
  const onResetDate = (id) => {
    switch (id) {
      case "endtime":
        setFormData({ ...formData, eTime: "", eDate: "" });
        break;
      case "starttime":
        setFormData({ ...formData, sTime: "", sDate: "" });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="modal__container">
      <form onSubmit={handleSubmit}>
        <div className="document__modal">
          <Header title="Document" />
          <div className="document__middle">
            {/* <Select
          label="Document Type"
          // onChange={onChange}
          // name="docType"
          // value=""
          id="docType"
          data={docType}
        /> */}
            <SelectInput
              label="Document Type"
              // onChange={onChange}
              // name="reminderperiod"
              // value=""
              id="docType"
              labelText="Upload"
              data={docType}
              visibility="visible"
              onChangeImage={onChangeImage}
              inputId="uploaddoc"
              inputType="file"
              inputStyle="doc__img"
              inputIcon={<DriverUploadDoc />}
            />
            {data.file.name && (
              <div className="file__bar">
                <DriverUploadFile />
                <div>
                  <span>{data.file.name}</span>
                  <span>{formatBytes(data.file.size)}</span>
                </div>
                <span onClick={onResetImage}>
                  <DeleteFileIcon />
                </span>
              </div>
            )}
            <div className="document__bottom">
              <InputLabel
                label="Reminder Period"
                onChange={onChange}
                name="reminderDays"
                value={reminderDays}
                type="text"
                id="reminderperiod"
                placeholder="30"
                labelText="Days"
                visibility="visible"
              />
              <InputLabel
                label="Reminder Period HR"
                onChange={onChange}
                name="reminderHours"
                value={reminderHours}
                type="text"
                id="reminderperiodhr"
                placeholder="10"
                labelText="Hours"
                visibility="hidden"
              />
              <Input
                label="Document Value"
                onChange={onChange}
                name="documentValue"
                value={documentValue}
                type="text"
                id="documentvalue"
                placeholder="Document Value"
                visibility="visible"
              />
              <Input
                label="Document Validity"
                onChange={onChange}
                name="documentValidity"
                value={documentValidity}
                type="date"
                id="documentvalue"
                placeholder="Document Value"
                visibility="visible"
              />
              <Input
                label="Start Date"
                onChange={onChange}
                name="sDate"
                value={sDate}
                type="date"
                id="startdate"
                placeholder="Start Date"
                visibility="visible"
              />
              <InputLabel
                label="Start Time"
                onChange={onChange}
                name="sTime"
                value={sTime}
                type="time"
                id="starttime"
                placeholder="10"
                labelText="Clear"
                visibility="hidden"
                onReset={onResetDate}
              />
              <Input
                label="End Date"
                onChange={onChange}
                name="eDate"
                value={eDate}
                type="date"
                id="enddate"
                placeholder="Start Date"
                visibility="visible"
              />
              <InputLabel
                label="End Time"
                onChange={onChange}
                name="eTime"
                value={eTime}
                type="time"
                id="endtime"
                placeholder="10"
                labelText="Clear"
                visibility="hidden"
                onReset={onResetDate}
              />
              <CheckBoxSingle
                label="Track Expiry"
                // onChange={onChange}
                // name="reminderperiod"
                // value=""
                type="checkbox"
                id="trackexpiry"
                placeholder="10"
              />
            </div>
          </div>
          <Footer />
        </div>
      </form>
    </div>
  );
}

export default AddDocumentsModal;
