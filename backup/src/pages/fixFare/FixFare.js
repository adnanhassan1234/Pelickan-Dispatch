import React, { useEffect, useState } from "react";
import axios from "axios";
import AddFixFare from "./AddfixFare";
import EditFixFare from "./EditFixFare";
import FixFareTable from "./FixFareTable";

const FixFare = ({ showFixfare }) => {
  const [showAddFixPopup, setShowAddFixPopup] = useState(false);
  const [showEditFixPopup, setShowEditFixPopup] = useState(false);
  const recordsPerPage = 1000;
  let [skip, setSkip] = useState(0);
  let [limit, setLimit] = useState(recordsPerPage);

  const [fixFare, setFixFare] = useState([]);

  const [fixFareAdd, setFixFareAdd] = useState({
    from: "",
    to: "",
    fare: "",
  });

  const [updateFixFareData, setUpdateFixFareData] = useState({
    id: "",
    from: "",
    to: "",
    fare: "",
  });

  const [getVal, setGetval] = useState({
    fromVal: "",
    toVal: "",
  });
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [msg, setMsg] = useState("");

  const getFixFare = async () => {
    try {
      const data = new FormData();
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("skip", skip);
      data.append("limit", limit);

      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/fares/fix_fare_all",
        data
      );
      setFixFare(res.data.Data.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFixFare();
  }, [skip, limit]); //eslint-disable-line

  const onChange = (e) => {
    setFixFareAdd({ ...fixFareAdd, [e.target.name]: e.target.value });
  };

  const onChangeVal = (e) => {
    setGetval({ ...getVal, [e.target.name]: e.target.value });
  };

  const onChangeSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    if (value.length > 0) {
      const data = fixFare.filter((item) => {
        return (
          item.from.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.to.toLowerCase().includes(e.target.value.toLowerCase())
        );
      });
      setSearchResults(data);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    searchResults.length > 0 ? setMsg("") : setMsg("No Results Found...!");
  }, [searchResults]);

  const onSubmit = async () => {
    try {
      const data = new FormData();
      data.append("from", getVal.fromVal);
      data.append("to", getVal.toVal);
      data.append("fare", fixFareAdd.fare);
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("company_id", "1");
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/fares/fix_fare_add",
        data
      );
      getFixFare();
      alert(res.data.message);
    } catch (err) {
      console.log(err);
      alert(err?.response?.data?.message);
    }
  };

  const onDelete = async (id) => {
    try {
      if (window.confirm("Press a button!\nEither OK or Cancel.")) {
        const data = new FormData();
        data.append("api_key", process.env.REACT_APP_API_KEY);
        data.append("id", id);
        const res = await axios.post(
          "https://api.test.pelickandespatch.com:8443/fares/fix_fare_delete",
          data
        );
        getFixFare();
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeUpdate = (e) => {
    setUpdateFixFareData({
      ...updateFixFareData,
      [e.target.name]: e.target.value,
    });
  };

  const onUpdateModal = (id, from, to, fare) => {
    const data = {
      id,
      from,
      to,
      fare,
    };
    setShowEditFixPopup(!showEditFixPopup);
    setUpdateFixFareData(data);
  };

  const onUpdate = async () => {
    try {
      const data = new FormData();
      data.append("id", updateFixFareData.id);
      data.append("from", updateFixFareData.from);
      data.append("to", updateFixFareData.to);
      data.append("fare", updateFixFareData.fare);
      data.append("api_key", process.env.REACT_APP_API_KEY);
      data.append("company_id", "1");
      const res = await axios.post(
        "https://api.test.pelickandespatch.com:8443/fares/fix_fare_edit",
        data
      );
      getFixFare();
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePagination = (tag) => {
    if (tag === "n") {
      setSkip(limit);
      setLimit(fixFare.length + limit);
    }
    if (tag === "b") {
      const sk = limit - skip;
      setSkip(skip - sk);
      setLimit(limit - sk);
    }
  };

  return (
    <>
      {showFixfare && (
        <div className="vehicleDriverMainMostDiv">
          <div className="vehicleDriverMainDiv">
            <label className="underlineInTable"></label>
            <div style={{ display: "flex" }}>
              <button
                className="addBtn"
                onClick={() => setShowAddFixPopup(!showAddFixPopup)}
              >
                Add Fix Fare
              </button>
              <div
                style={{
                  display: "flex",
                  padding: "10px",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "30%",
                }}
              >
                <label
                  className="registrationWidth"
                  style={{ marginLeft: "-5px" }}
                >
                  Search
                </label>
                <input
                  className="commonInput registerrationInput"
                  style={{ width: "100%", height: "36px" }}
                  name="search"
                  type="text"
                  value={search ?? ""}
                  placeholder="search"
                  onChange={(e) => onChangeSearch(e)}
                />
              </div>
            </div>
            <div>
              <div className="driversmainDiv">
                <AddFixFare
                  showAddFixPopup={showAddFixPopup}
                  setShowAddFixPopup={setShowAddFixPopup}
                  onChange={onChange}
                  onSubmit={onSubmit}
                  fixFareAdd={fixFareAdd}
                  getVal={getVal}
                  onChangeVal={onChangeVal}
                />

                <EditFixFare
                  showEditFixPopup={showEditFixPopup}
                  setShowEditFixPopup={setShowEditFixPopup}
                  onChange={onChangeUpdate}
                  onUpdate={onUpdate}
                  updateFixFareData={updateFixFareData}
                />
                {searchResults.length > 0 && (
                  <FixFareTable
                    onUpdateModal={onUpdateModal}
                    onDelete={onDelete}
                    fixFare={searchResults}
                    handlePagination={handlePagination}
                    limit={limit}
                    tag="searchRes"
                  />
                )}
                {search.length <= 0 && (
                  <FixFareTable
                    onUpdateModal={onUpdateModal}
                    onDelete={onDelete}
                    fixFare={fixFare}
                    handlePagination={handlePagination}
                    limit={limit}
                    tag="fixFare"
                    recordsPerPage={recordsPerPage}
                  />
                )}
                {search.length > 0 && searchResults.length <= 0 && (
                  <label
                    style={{ padding: "20px", width: "100%" }}
                    className="nameLbl comonLblmrgn"
                  >
                    {msg}
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FixFare;
