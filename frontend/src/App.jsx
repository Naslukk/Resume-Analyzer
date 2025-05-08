import React, { useState } from "react";
import "./index.css";
import ResumeForm from "./components/ResumeForm";
import ResultCard from "./components/ResultCard";
import Loader from "./components/Loader";

function App() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDesc, setJobDesc] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile || !jobDesc) {
      alert("Upload resume and enter job description.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", resumeFile);
    formData.append("jd", jobDesc);

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      alert("Something went wrong.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-3xl p-8 transition-all duration-300 bg-white shadow-2xl bg-opacity-80 backdrop-blur-md rounded-3xl">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-800">
          🚀 Smart Resume Analyzer
        </h2>

        <ResumeForm
          resumeFile={resumeFile}
          setResumeFile={setResumeFile}
          jobDesc={jobDesc}
          setJobDesc={setJobDesc}
          loading={loading}
          handleSubmit={handleSubmit}
        />

        {loading && <Loader />}
        {result && <ResultCard result={result} />}
      </div>
    </div>
  );
}

export default App;
