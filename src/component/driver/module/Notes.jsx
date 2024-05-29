import { useState } from "react";

function Notes() {
  const [formData, setFormData] = useState({
    driver_notes: "",
  });
  const { driver_notes } = formData;

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
    <div className="notes__container">
      <form onSubmit={handleSubmit}>
        <div className="detail__input">
          <label htmlFor="drivernotes">Driver Notes:</label>
          <textarea
            id="drivernotes"
            name="driver_notes"
            rows="35"
            cols="60"
            required
            value={driver_notes}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Notes;
