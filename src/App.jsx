import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [formdata, setFormdata] = useState({
    name: "",
    number: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the submitted data
    setSubmittedData(formdata);

    // Clear the form inputs
    setFormdata({ name: "", number: "" });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter name"
            value={formdata.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mobile No:</label>
          <input
            type="number"
            name="number"
            className="form-control"
            placeholder="Enter mobile number"
            value={formdata.number}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* Display submitted data only after submit */}
      {submittedData && (
        <div className="mt-4">
          <h5>Submitted Data:</h5>
          <p>Name: {submittedData.name}</p>
          <p>Mobile No: {submittedData.number}</p>
        </div>
      )}
    </div>
  );
}

export default App;
