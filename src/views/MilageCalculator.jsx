import { useState, useEffect } from "react";
import Sidebar from "@/component/dashboard/Sidebar";
import Navbar from "@/component/dashboard/Navbar";
import McalculatorModal from "@/component/modal/McalculatorModal";

const MilageCalculator = () => {
  const [data, setData] = useState(null);
  const [getModal, setModal] = useState({
    data: {},
    state: false,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("@/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="">
      <Navbar title="Millage Calculator" />
      <div className="main-milage ml-260 milage-container">
        <div className="car-all">
          <McalculatorModal setModal={setModal} getModal={getModal} />
          {data.map((item, index) => (
            <div className="car-box" key={index}>
              <div id={`myBtn${index}`} className="edit-icon">
                <button
                  onClick={() => {
                    setModal({
                      data: item,
                      status: true,
                    });
                  }}
                >
                  <i className="fa-solid fa-pen"></i>
                </button>
              </div>

              <img src={item.image} alt="" />
              <span>{item.title}</span>
              <p>{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MilageCalculator;
