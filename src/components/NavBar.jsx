function NavBar() {
    // const username = "Darien";

    const userInfo = {
        username: "Darien",
    };


    return (
        <nav className="mt-5" onClick={() => alert("clicked")} style={styles}>
            
          <a href="#" className="some-class">
        Home
      </a>
      <a href="#">About</a>
    
      <div>
        Welcome, {userInfo.username}
      </div>
        </nav>
    );
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

export default NavBar;