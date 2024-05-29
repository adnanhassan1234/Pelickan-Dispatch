import Header from "./modals/modalcomponent/Header";
import { useState } from "react";
import { SketchPicker } from "react-color";
import Footer from "./modals/modalcomponent/Footer";

function ColorPicker() {
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  // destructuring rgba from state
  const { r, g, b, a } = sketchPickerColor;

  //creating state to store our color and also set color using onChange event for block picker
  const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");
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
  // const onChange = (e) => {
  //   console.log(e);
  // };
  return (
    <div className="modal__container">
      <div className="color__modal">
        <Header title="Colour" />
        <SketchPicker
          onChange={(color) => {
            setSketchPickerColor(color.rgb);
          }}
          color={sketchPickerColor}
        />
        <Footer />
      </div>
    </div>
  );
}

export default ColorPicker;
