import { useState } from "react";
import avatar from "@/assets/avatar3.jpg";
function Picture() {
  const [driverImage, setDriverImage] = useState({
    image: "",
    imageFile: null,
  });
  console.log(driverImage);
  const onChangeImage = async (file) => {
    const imageData = await convertBase64(file.target.files[0]);
    setDriverImage({
      image: imageData,
      imageFile: file.target.files[0],
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
  return (
    <div className="picture__main">
      <div className="picture__middle">
        <img src={!driverImage.image ? avatar : driverImage.image} alt="" />
        <label htmlFor="driverImgfile">Change</label>
        <input onChange={onChangeImage} id="driverImgfile" type="file" />
        {/* <button>Change</button> */}
      </div>
    </div>
  );
}

export default Picture;
