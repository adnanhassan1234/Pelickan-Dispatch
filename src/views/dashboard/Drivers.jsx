import DocumentModal from "@/component/modal/DocumentModal";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "@/component/dashboard/Table";
import driver2 from "@/driver.json";
import Navbar from "@/component/dashboard/Navbar";
function Drivers() {
  const [selectedDoc, setSelectedDoc] = useState({
    data: {},
    modalStatus: false,
    id: "",
  });
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const config = {
          method: "get",
          url: "/document/ocr_documents",
          headers: {},
        };

        const response = await axios.request(config);
        setDrivers(response.data.data);

        // const finaldData = {};

        // driver2.forEach((item) => {
        //   const { driverId, docId, files } = item;

        //   if (!finaldData[driverId]) {
        //     finaldData[driverId] = {
        //       driverId,
        //       files: [{ docId, ...files[0] }],
        //     };
        //   } else {
        //     const isExist = finaldData[driverId];
        //     isExist.files.push({ docId, ...files[0] });
        //   }
        // });

        // const mergedArray = Object.values(finaldData);

        // setDrivers(mergedArray);
      } catch (error) {
        console.log(error);
        setDrivers(driver2);
      }
    }

    fetchData();
  }, []);

  // const toggleDropdown = (event) => {
  //   const parentRow = event.target.closest(".drivert-row");
  //   const dropdownContent = parentRow.nextElementSibling;
  //   dropdownContent.classList.toggle("hidden");
  // };

  const onOpenModal = (selected, id) => {
    setSelectedDoc({ data: selected, modalStatus: true, id });
  };
  // const data = [
  //   {
  //     document_id: "12345678909-0011",
  //     document_type: "Driving License",
  //     expiry_date: "05/12/2026",
  //     document_status: "Verified",
  //   },
  //   {
  //     document_id: "12345678909-0012",
  //     document_type: "Driving License",
  //     expiry_date: "05/12/2026",
  //     document_status: "Verified",
  //   },
  //   {
  //     document_id: "12345678909-0013",
  //     document_type: "Driving License",
  //     expiry_date: "05/12/2026",
  //     document_status: "Verified",
  //   },
  // ];
  return (
    <div className="d-flex-row">
      {/* <!-- MIAN CONTAINER --> */}

      <div className="main-container  w-100 margin__width">
        <Navbar title="Drivers" />
        {/* <!-- TOP BAR --> */}
        <div className="upload"></div>
        {/* <div className="top-nav border-bottom justify-end m-2">
          <div className="top-menu align-center justify-center">
            <button className="mx-1 border-none bg-white">
              <i className="far fa-calendar f-24"></i>
            </button>
            <button className="mx-1 border-none bg-white">
              <i className="far fa-bell f-24"></i>
            </button>
            <button className="mx-1 border-none bg-white">
              <i className="far fa-comment-dots f-24"></i>
            </button>
            <button className="align-center mx-1 border-none bg-white">
              <img src="/Media/User_thmb.png" className="px-1" />
              <i className="fas fa-angle-down f-24"></i>
            </button>
          </div>
        </div> */}

        {/* <!-- DRIVER DOCUMENT TABLE --> */}
        <div className="table__pagination">
          <Table records={drivers} onOpenModal={onOpenModal} />
        </div>
        <section>
          <div className="m-2"></div>

          {/* <!-- MODAL --> */}
          <DocumentModal
            selectedDoc={selectedDoc}
            setSelectedDoc={setSelectedDoc}
          />

          {/* <!--  --> */}
        </section>
      </div>
    </div>
  );
}

export default Drivers;
