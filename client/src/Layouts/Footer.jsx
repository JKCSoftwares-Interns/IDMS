const Footer = () => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      padding: '1rem',
      justifyContent: 'space-between',
      borderTop: '2px solid #10b981', // Emerald-500 color
      backgroundColor: '#ffffff' // Background color to match the rest of the design
    }}>
      <a href="#" style={{
        color: '#333',
        fontSize: '16px',
        textDecoration: 'none',
        marginRight: 'auto'
      }}>Privacy Policy</a>
      <p style={{
        color: '#333',
        fontSize: '16px',
        margin: 0,
        textAlign: 'center',
        flexGrow: 1
      }}>© 2023 JKC Softwares, LLP.</p>
      <a href="#" style={{
        color: '#333',
        fontSize: '16px',
        textDecoration: 'none',
        marginLeft: 'auto'
      }}>Terms & Conditions</a>
    </div>
  );
};

export default Footer;
