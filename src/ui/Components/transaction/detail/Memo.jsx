"use client";
import { useState, useEffect } from "react";

const Memo = ({ data }) => {
  const [memo, setMemo] = useState(data);

  return (
    <div className="w-full my-5">
      <input
        className="w-full h-full"
        type="text"
        placeholder="메모할 수 있어요.(최대20자)"
        maxLength="20"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
      />
    </div>
  );
};

export default Memo;
