import "./navbar.scss"
import React from "react"

const Navbar = () => {
	return (
		<nav>
			<div className="logo">UpKeep</div>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
				<li>Login</li>
				<li>Sign Up</li>
			</ul>
		</nav>
	)
}

export default Navbar
