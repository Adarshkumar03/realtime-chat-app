import List from "../components/List"
import Chat from "../components/Chat"
const Home = () => {
  return (
    <div className="flex border border-blue-500 p-5 h-[40rem]">
      <List/>
      <Chat/>
    </div>
  )
}

export default Home