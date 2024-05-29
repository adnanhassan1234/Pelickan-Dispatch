import DocumentModal from "@/component/modal/DocumentModal";
import { useEffect, useState } from "react";
import Table from "@/component/dashboard/Table";
import { useDispatch, useSelector } from "react-redux";
import { onGetDriversDoc } from "@/actions";
function Drivers() {
  const [selectedDoc, setSelectedDoc] = useState({
    data: {},
    modalStatus: false,
    id: "",
  });
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.drivers) || [];
  useEffect(() => {
    dispatch(onGetDriversDoc());
  }, [dispatch]);

  const onOpenModal = (selected, id) => {
    setSelectedDoc({ data: selected, modalStatus: true, id });
  };

  return (
    <div className="container__second--generic">
      {!loading ? (
        <>
          {/* <HalfScreenSpinner state={true} /> */}
          <div className="table__pagination ">
            <Table records={data?.data || []} onOpenModal={onOpenModal} />
          </div>
          <DocumentModal
            selectedDoc={selectedDoc}
            setSelectedDoc={setSelectedDoc}
          />
        </>
      ) : (
        <div className="m-2">
          <div className="shimmer__effect tab"></div>
          <div className="shimmer__effect--bottom">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      {/* <HalfScreenSpinner state={loading} /> */}
    </div>
  );
}

export default Drivers;
