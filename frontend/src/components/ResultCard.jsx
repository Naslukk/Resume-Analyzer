import React from "react";

const ResultCard = ({ result }) => {
  return (
    <div className="p-6 mt-10 bg-white border border-gray-200 shadow-inner rounded-xl">
      <h3 className="mb-4 text-xl font-bold text-gray-800">🔎 Result</h3>
      <p className="text-lg">
        <strong>Match Score:</strong>{" "}
        <span className="font-bold text-green-600">{result.match_score}%</span>
      </p>
      <p className="mt-3 text-gray-700">
        <strong>Feedback:</strong> {result.feedback}
      </p>
    </div>
  );
};

export default ResultCard;
