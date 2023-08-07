import { Link } from "react-router-dom";


const Homepage = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("username")
  console.log(`${token}, ${user}`)
  return (
    <><>
      <div className="text-2xl pl-5">Welcome to Fitness Tracker</div>;

    </><Link
      to="/Login" className="text-xl"
    > Click here to Register or Log in
      </Link></>
  );
}

export default Homepage;
