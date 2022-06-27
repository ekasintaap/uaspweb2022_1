import "./list.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import Datatabletrs from "../../../components/datatable/transaksi/Datatabletrs";

const Listtrs = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatabletrs/>
      </div>
    </div>
  )
}

export default Listtrs