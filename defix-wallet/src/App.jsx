import { NavBar, Start, Note,Transactions, Works } from "./components"


const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <NavBar />
      <Start />
    </div>
    <Works/>
    <Transactions/>
    <Note />
  </div>
);

export default App 

