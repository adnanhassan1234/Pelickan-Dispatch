import PropTypes from "prop-types";
import { CSV, Preview } from "@/assets/svg/Svg";
import Header from "./modalcomponent/Header";
function PrintModal({ data, type }) {
  const onRenderIcon = (field) => {
    switch (field) {
      default:
        return field === "" || field === null ? "--" : field;
    }
  };
  function printContent() {
    var printWindow = window.open("");
    printWindow.document.write(
      `<html><head><title>Print</title><style>div{border: 1px dashed;} h4{margin:0; border-bottom: 1px solid; padding: 9px 14px; font-size: 12px; font-weight: 500;}  th:first-of-type,td:first-of-type {min-width: 16px; } th, td{font-size: 12px; font-weight: 500; min-width: 115px;padding: 5px 12px 5px 12px;height: auto;text-align: left;}</style></head><div><h4>${type}, sorted by</h4><body>`
    );

    printWindow.document.write("<table>");
    printWindow.document.write("<thead><tr class='driver-row'>");

    Object.keys(data[0]).forEach((item) => {
      printWindow.document.write(`<th>${item}</th>`);
    });

    printWindow.document.write("</tr></thead>");
    printWindow.document.write("<tbody>");

    data.forEach((item) => {
      printWindow.document.write("<tr class='driver-row'>");
      Object.values(item).forEach((value) => {
        printWindow.document.write(`<td>${onRenderIcon(value)}</td>`);
      });
      printWindow.document.write("</tr>");
    });

    printWindow.document.write("</tbody></table>");
    printWindow.document.write("</div></body></html>");
    printWindow.document.close();
    printWindow.print();
  }

  function exportToCSV() {
    const csvContent = [
      Object.keys(data[0]),
      ...data.map((obj) => Object.values(obj)),
    ]
      .map((row) => row.join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "exported_data.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div
      className="modal__container driver__main"
      onMouseDown={(e) => e.stopPropagation()}
    >
      <div className="print__modal" id="printableArea">
        <Header title="Preview, Print Or Export" />
        <div className="print__middle">
          <div className="print__options" onClick={() => printContent()}>
            <Preview />
            <p className="example__text--second">Preview</p>
          </div>

          <div className="print__options" onClick={() => exportToCSV()}>
            <CSV />
            <p className="example__text--second">Export To CSV File</p>
          </div>
        </div>
      </div>
    </div>
  );
}
PrintModal.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
};
export default PrintModal;
