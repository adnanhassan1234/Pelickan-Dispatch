import Table from "@/component/form/Table";
function Payments() {
  const data = [
    {
      Date: "National Insurance No.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "Badge No.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "Driving License.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "National Identity.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "National Identity.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "National Identity.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "National Identity.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "National Identity.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "National Identity.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "National Identity.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "National Identity.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "National Identity.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "National Identity.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "National Identity.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
    {
      Date: "National Identity.",
      Debit: "SK036451D",
      Credit: "SK036451D",
      Description: "SK036451D",
    },
  ];
  return (
    <div className="dashboard__payment--driver">
      <div className="payment__top">
        <h3>You Owe</h3>
        <p>Total : £ 0.00</p>
      </div>
      <div className="table__main">
        <Table data={data} />
      </div>
    </div>
  );
}

export default Payments;
