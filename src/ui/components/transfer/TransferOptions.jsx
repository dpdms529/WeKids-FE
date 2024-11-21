const TransferOptions = ({ handleAddAmount, handleSetMaxAmount }) => (
  <div className="flex justify-between px-4 py-2">
    <button
      className="px-6 py-2 border border-stone-300 rounded-full text-R-14 text-black/80 bg-white"
      onClick={() => handleAddAmount(10000)}
    >
      +1만
    </button>
    <button
      className="px-6 py-2 border border-stone-300 rounded-full text-R-14 text-black/80 bg-white"
      onClick={() => handleAddAmount(50000)}
    >
      +5만
    </button>
    <button
      className="px-6 py-2 border border-stone-300 rounded-full text-R-14 text-black/80 bg-white"
      onClick={() => handleAddAmount(100000)}
    >
      +10만
    </button>
    <button
      className="px-6 py-2 border border-stone-300 rounded-full text-R-14 text-black/80 bg-white"
      onClick={handleSetMaxAmount}
    >
      전액
    </button>
  </div>
);

export default TransferOptions;
