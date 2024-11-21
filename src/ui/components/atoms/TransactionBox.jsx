export default function TransactionBox({ date, description, type, amount, balance, tag, width = "max-w-md", paddingY = "py-6"  }) {
    return (
        <div className={`w-full ${width}`}>
          <div className={`flex border px-4 ${paddingY} shadow-sm bg-white`}>
            <div className="text-xs text-gray-500 w-8 flex-shrink-0 justify-between text-center pt-1">
              {date}
            </div>

                  <div className="flex flex-col flex-grow ml-4">
              <span className="font-semibold text-gray-900">{description}</span>
              {tag && (
                <span className="text-xs text-blue-500 mt-1">#{tag}</span>
              )}
            </div>

            <div className="text-right flex-shrink-0">
              <span className={`block text-lg font-semibold ${type == "출금" ? 'text-black-500' : 'text-blue-500'}`}>
                {type == "출금" ? `-${amount.toLocaleString()}원` : `${amount.toLocaleString()}원`}
              </span>
              <span className="text-xs text-gray-500">{balance.toLocaleString()}원</span>
            </div>
          </div>
        </div>
    );
  }