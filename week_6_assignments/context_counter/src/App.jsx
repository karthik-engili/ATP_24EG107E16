import EditCounter1 from "./components/EditCounter1"
import EditCounter2 from "./components/EditCounter2"
import EditCounter3 from "./components/EditCounter3"
import EditCounter4 from "./components/EditCounter4"
import UserForm from "./components/UserForm"
import UserCount from "./components/UserCount"
import Users from "./components/Users"

function App() {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-center font-bold text-8xl mb-10">App Counters</h1>
        <div className="grid grid-cols-2">
          <EditCounter1/>
          <EditCounter2/>
          <EditCounter3/>
          <EditCounter4/>   
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-center font-bold text-6xl mb-10">User from with dynamic Table</h1>
        <div>
          <UserForm/>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-center font-bold text-6xl mb-10">User Count</h1>
        <div className="container text-center mt-4">
          <UserCount />
          <Users />
        </div>
      </div>
    </div>
  )
}

export default App