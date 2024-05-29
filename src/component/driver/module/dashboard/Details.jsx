import Table from "@/component/form/Table";
function Details() {
  const data = [
    {
      DocumentName: "National Insurance No.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "Badge No.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "Driving License.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
    {
      DocumentName: "National Identity.",
      Value: "SK036451D",
      ExpiryDate: "SK036451D",
    },
  ];
  return (
    <div className="dashboard__detail--driver">
      <h3>Driver Name</h3>
      <div className="table__main">
        <Table data={data} />
      </div>
    </div>
  );
}

export default Details;
