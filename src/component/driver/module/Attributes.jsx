import { useState } from "react";

function Attributes() {
  const [formData, setFormData] = useState({
    notes: "",
  });

  const { notes } = formData;

  const handleSelectAll = () => {
    document.getElementById("notes").select();
    // onCloseModal("document");
  };

  const handleClearAll = () => {
    setFormData({ notes: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="attributes__container">
      <form onSubmit={handleSubmit}>
        <div className="detail__input">
          <textarea
            id="notes"
            name="notes"
            rows="33"
            cols="60"
            required
            value={notes}
            onChange={handleChange}
          />
        </div>
        <div className="form__bottom second__bottom--footer">
          <button type="button" onClick={handleSelectAll}>
            Select All
          </button>
          <button type="button" onClick={handleClearAll}>
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
}

export default Attributes;
