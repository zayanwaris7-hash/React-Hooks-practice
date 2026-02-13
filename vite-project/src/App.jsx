import { useState } from "react";
import "./index.css";

function App() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [show, setshow] = useState(false);
  const [submittedEmail,setsubemail]=useState("");
  const [submittedPassword,setsubpass]=useState("");

  const showtxt = () => {
    setsubemail(email);
    setsubpass(password);
    setshow(true);
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          Login
        </h2>
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => { setemail(e.target.value) }}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"

            value={password}
            onChange={(e) => { setpassword(e.target.value) }}
          />
          <button onClick={showtxt}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >Enter</button>
        

        {show && <p>Email : {submittedEmail}</p>}
        {show && <p>Password : {submittedPassword}</p>}
        </div>
      </div>
    </>

  );
}

export default App;
