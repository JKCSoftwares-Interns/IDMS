const HeadBar = () => {
  return (
    <div style={{
      backgroundColor: ' #FEFEFA', // Clean white shade
      display: 'flex',
      flexWrap: 'wrap',
      padding: '0.5rem 2rem', // Equivalent to py-2 px-8
      justifyContent: 'space-between'
    }}>

      <div id="logo">
        <h1 style={{ 
          margin: 0, 
          color: '#333', // Font color
          fontSize: '40px',
          fontWeight:'bold' 
        }}>IDMS</h1>
      </div>

      <div id="account" style={{ 
        display: 'flex', 
        alignItems: 'center',
        color: '#333', // Font color
        fontSize: '20px' // Font size
      }}>
        <img 
          src="/public/people.png" 
          alt="Account Icon" 
          style={{ height: '35px', marginRight: '0.5rem' }} // Height 25px and margin between image and text
        />
        <div>
          <span>Account</span>
          <span style={{ 
            display: 'block', 
            fontSize: '12px', // Smaller font size for admin text
            color: '#333' 
          }}>admin</span>
        </div>
      </div>

    </div>
  );
};

export default HeadBar;
