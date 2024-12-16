import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Contact us at: <a href="mailto:info@futurebali.com" style={styles.link}>info@futurebali.com</a></p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333', // Dark grey
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    marginTop: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default Footer;
