import { Search, Plus, Minus } from "lucide-react";
import { useState } from "react";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="pl-3">
      <div className="w-full h-full p-1 flex mb-2">
        <div className="mr-3 flex bg-slate-400 border border-gray-800 px-2">
          <Search size={26} className="w-1/12" />
          <input type="text" className="bg-slate-400 border-0 w-11/12 focus:outline-none" />
        </div>
        {addMode ? (
          <Minus
            onClick={() => setAddMode(!addMode)}
            className="bg-slate-400 p-1"
            size={26}
          />
        ) : (
          <Plus
            onClick={() => setAddMode(!addMode)}
            className="bg-slate-400 p-1"
            size={26}
          />
        )}
      </div>
      {/* chat-list */}
      <div className="overflow-auto h-[31rem]">
        {[...Array(10)].map((_, index) => (
          <div key={index} className="flex mb-2">
            <img src="./avatar.png" className="w-12 border rounded-full" />
            <div className="flex flex-col ml-2">
              <h2 className="font-bold text-md">Adarsh Kumar</h2>
              <p>Text</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
