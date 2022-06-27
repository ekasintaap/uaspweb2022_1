import "./list.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import Datatablembr from "../../../components/datatable/member/Datatablembr";

const Listmbr = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatablembr/>
      </div>
    </div>
  )
}

export default Listmbr