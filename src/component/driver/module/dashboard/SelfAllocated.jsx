import InputSingle from "@/component/form/InputSingle";
import SelectSingle from "@/component/form/SelectSingle";
import Table from "@/component/form/Table";

function SelfAllocated() {
  const data = [
    {
      PickupTime: "National Insurance No.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "Badge No.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "Driving License.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "National Identity.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "National Identity.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "National Identity.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "National Identity.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "National Identity.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "National Identity.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "National Identity.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "National Identity.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "National Identity.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "National Identity.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "National Identity.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
    {
      PickupTime: "National Identity.",
      PickupAddress: "SK036451D",
      DropoffAddress: "SK036451D",
      EstimatedDuration: "SK036451D",
    },
  ];
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
  return (
    <div className="dashboard__allocated--driver">
      <div className="allocated__top">
        {/* <h3>You Owe</h3> */}
        {/* <p>Total : £ 0.00</p> */}
        <SelectSingle
          label="Document Type"
          // onChange={onChange}
          // name="docType"
          // value=""
          id="docType"
          data={docType}
        />

        <InputSingle
          // onChange={onChange}
          // name="reminderperiod"
          // value=""
          type="text"
          id="documentvalue"
          placeholder="     Search All Pickup Postcodes"
          visibility="visible"
        />
      </div>
      <div className="table__main">
        <Table data={data} />
      </div>
    </div>
  );
}

export default SelfAllocated;
