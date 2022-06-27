import "./list.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import Datatablebrg from "../../../components/datatable/barang/Datatablebrg";

const Listbrg = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatablebrg/>
      </div>
    </div>
  )
}

export default Listbrg