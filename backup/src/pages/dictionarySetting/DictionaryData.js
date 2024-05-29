import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const DictionaryData = ({ setDicEditModal }) => {
  const [imagesS, setImage] = useState();
  useEffect(() => {
    getImage();
  }, [imagesS]);
  const getImage = async () => {
    const rslt = await axios.get(
      `https://api.test.pelickandespatch.com:8443/document/get-one/6319e267df5df47b268afb30`
    );
    console.log("image");
    console.log(rslt.data.data.image[0]);
    setImage(rslt.data.data.image[0]);
  };
  return (
    <div
      className="driversmainDiv"
      //   style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
    >
      <table className="tableDesign driverTable">
        <thead>
          <tr className="theadColor">
            <th className="py-2 px-1">Language Code</th>
            <th className="py-2 px-1">Key</th>
            <th className="py-2 px-1">Text</th>
            <th className="py-2 px-1">Active</th>

            <th className="py-2 px-1">Actions</th>
          </tr>
        </thead>
        <tbody className="textCenter">
          <tr className="cursorPointer">
            <td>Eng</td>
            <td>Cv</td>
            <td>2</td>
            <td>Active</td>

            <td className="icnosTd">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <span
                  className="updatelabel"
                  onClick={() => setDicEditModal(true)}
                >
                  <i className="fa-solid fa-pen-to-square editColor fontSizeIcons"></i>
                </span>
                <span className="deletelabel">
                  <i className="fa-solid fa-trash fontSizeIcons deleteColor"></i>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DictionaryData;
