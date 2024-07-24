import UserInfo from "./UserInfo";
import ChatList from "./ChatList";

const List = () => {
  return (
    <div className="w-1/4 border border-green-900">
      <UserInfo />
      <ChatList />
    </div>
  );
};

export default List;
