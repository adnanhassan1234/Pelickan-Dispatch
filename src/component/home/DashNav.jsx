import FilterSingle from "../driver/module/modals/modalcomponent/FilterSingle";
import { Fragment, useState } from "react";

const DashNav = () => {
  const fleet = [
    {
      name: "BAC",
      option: "checkbox",
    },
    {
      name: "BPC",
      option: "checkbox",
    },
    {
      name: "SBC",
      option: "checkbox",
    },
  ];
  const attribute = [
    {
      name: "*Airport Pickup[AP]",
      option: "checkbox",
    },
    {
      name: "10_Seater/Multiple_V(UpTo 10pax, 8Lug)",
      option: "checkbox",
    },
    {
      name: "12_Seater/Multiple_V(UpTo 10pax, 8Lug)",
      option: "checkbox",
    },
    {
      name: "14_Seater/Multiple_V(UpTo 10pax, 8Lug)",
      option: "checkbox",
    },
    {
      name: "16_Seater/Multiple_V(UpTo 10pax, 8Lug)",
      option: "checkbox",
    },
    {
      name: "2 Baby Seat",
      option: "checkbox",
    },
    {
      name: "2 Booster Seat",
      option: "checkbox",
    },
    {
      name: "Airport Dropoff",
      option: "checkbox",
    },
    {
      name: "Cash(Part) [Cash]",
      option: "checkbox",
    },
  ];

  const [fleets, setFleets] = useState([]);
  const [attributes, setAttributes] = useState([]);

  const [currentDateTime] = useState(new Date());
  const formatDate = (date) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      weekday: "short",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    return date.toLocaleString(undefined, options);
  };
  return (
    <Fragment>
      <div className="check--feild__ms dis--flx__ms">
        <FilterSingle
          title="All Fleets"
          id="allfleets"
          filterValues={fleet}
          fieldsData={fleets}
          setFields={setFleets}
        />
        <FilterSingle
          title="All Attributes"
          id="allattributes"
          filterValues={attribute}
          fieldsData={attributes}
          setFields={setAttributes}
        />
        {/* <i
          className="fa-solid fa-car"
          style={{ color: "rgba(215, 150, 24, 1)" }}
        ></i> */}
        {/*   <i
          className="fa-solid fa-bars"
          style={{ color: "rgba(215, 150, 24, 1)" }}
        ></i> */}
      </div>
      <div className="dash--navLeft__ms dis--flx__ms">
        <span className="get--txt__ms dis--flx__ms">
          {fleets.length && attributes.length > 0
            ? fleets.join(",") + ", " + attributes.join(", ")
            : "All Fleets and All Attributes"}
        </span>

        <p>
          <span>
            <i
              className="fa-solid fa-calendar-days"
              style={{ marginRight: "5px" }}
            ></i>
          </span>
          <span>{formatDate(currentDateTime)}</span>
        </p>
      </div>
    </Fragment>
  );
};

export default DashNav;
