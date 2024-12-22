import { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaChartPie, FaChartLine, FaFileAlt, FaCalendar, FaBars, FaHome, FaCogs, FaSlidersH } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import 'react-pro-sidebar/dist/css/styles.css'; // Import default styles

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  const checkScreenSize = () => {
    if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
      setCollapsed(true); // Collapse sidebar on small screens
    } else {
      setCollapsed(false); // Expand sidebar on larger screens
    }
  };
  useEffect(()=>{
    checkScreenSize()
  },[])
  const navigate = useNavigate();

  return (
        <Sidebar collapsed={collapsed} className=" min-vh-100  bg-white">
        <Menu iconShape="circle"> 
        <div className='d-flex justify-content-end p-3'> <FaBars onClick={toggleSidebar}/></div>
            <MenuItem icon={< FaHome  />} >
             {/* <NavLink className='text-decoration-none text-dark fw-bold' to ="/admin/home"> </NavLink>  */}
             <span className='fw-bold' onClick={()=>navigate("/admin/home")}>الرئيسية</span>
        
            </MenuItem>
            <SubMenu className='text-decoration-none text-dark fw-bold'  label="الاعدادات العامة"  title="Charts" icon={<FaCogs/>} >
            <MenuItem icon={<FaSlidersH/>}> 
          {/* <NavLink className='text-decoration-none text-dark fw-bold' to="/admin/settings"></NavLink>   */}
             <span className='fw-bold' onClick={()=>navigate("/admin/settings")}> الاعدادات الاساسية 
             </span>
            </MenuItem>
            <MenuItem icon={<FaChartLine />}> Line charts </MenuItem>
            </SubMenu>
            <MenuItem icon={<FaFileAlt />} >
            {/* <NavLink className='text-decoration-none text-dark' to ="/">Documentation</NavLink> */}
            </MenuItem>
            <MenuItem icon={<FaCalendar />} >
            {/* <NavLink className='text-decoration-none text-dark' to ="/">Calendar</NavLink> */}
            </MenuItem>
        </Menu>
        </Sidebar>
  );
};

export default AdminSidebar;
