import { useState } from "react";

const App = () => {

  const [formData, setFormData] = useState({
    name: '', email: '', tel: '', msg: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.tel || !formData.msg) {
      alert('All fields are required!');
      return;
    }
    console.log('Sumitted data: ', formData);

    setFormData({
      name: '', email: '', tel: '', msg: ''
    });

  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: '.5rem' }}>
        <label>
          Name:
          <input value={formData.name} onChange={handleChange} name="name" type="text" />
          <br />
        </label>
        <label>
          Email:
          <input value={formData.email} onChange={handleChange} name="email" type="text" />
        </label>
        <label>
          Telephone:
          <input value={formData.tel} onChange={handleChange} name="tel" type="text" />
        </label>
        <label>
          Message:
          <textarea alue={formData.msg} onChange={handleChange} name="msg" />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  )
};

export default App;
