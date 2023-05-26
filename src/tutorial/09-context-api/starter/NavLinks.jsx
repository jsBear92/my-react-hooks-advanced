import UserContainer from "./UserContainer";

const NavLinks = ({ user, logout }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  )
}

export default NavLinks;