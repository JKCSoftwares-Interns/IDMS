const NavButton = () => {
  
          <NavLink className='flex items-center gap-5 hover:bg-[#5e7bcc] p-2 hover:rounded-md' to='/'>
            <FontAwesomeIcon icon={faTableColumns} style={{ color: "#2e1579"}} size="xl"/>
            <span className='text-gray-700 text-[1.2rem] hover:text-slate-100'>Dashboard</span>
          </NavLink>

}

export default NavButton;
