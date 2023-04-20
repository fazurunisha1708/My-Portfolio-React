const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/fazurunisha1708">
        <i className="fa-brands fa-github" aria-hidden="true" title="Fazuru Nisha' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/fazurunisha-m-186a44240">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Fazuru Nisha' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://instagram.com/nisha._.faz?igshid=ZDdkNTZiNTM=">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Fazuru Nisha' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href=" https://twitter.com/Fazurunisha?t=125OxvZgERzDQvkKkBslBg&s=08">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Fazuru Nisha' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
