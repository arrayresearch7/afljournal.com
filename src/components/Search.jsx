import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-white shadow-xl p-6 space-y-5">
      <h3 className="text-lg font-bold text-slate-900">
        Research Tools
      </h3>

      <button
        onClick={() => navigate("/submissions")}
        className="w-full rounded-xl py-3 font-bold text-white
        bg-gradient-to-r from-indigo-500 to-cyan-500 shadow"
      >
        Submit Research
      </button>

      <input
        type="text"
        placeholder="Search research topics, keywords, authors…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-xl px-4 py-3 border border-slate-200"
      />

      <button
        onClick={() => onSearch(query)}
        className="w-full rounded-xl py-3 font-semibold
        bg-slate-900 text-white"
      >
        Search Publications
      </button>
    </div>
  );
};

export default Search;
