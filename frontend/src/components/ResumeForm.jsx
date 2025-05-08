import React from "react";

const ResumeForm = ({
    resumeFile,
  setResumeFile,
  jobDesc,
  setJobDesc,
  loading,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Upload Resume (PDF)
        </label>
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setResumeFile(e.target.files[0])}
          className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">
          Job Description
        </label>
        <textarea
          rows={6}
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
          className="w-full p-3 border-2 border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Paste the job description here..."
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          disabled={loading}
          className={`inline-block px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500"
          }`}
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </div>
    </form>
  );
};

export default ResumeForm;
