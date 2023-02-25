import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Notfound from "./components/common/notfound.jsx"
import Navbar from "./components/layout/Navbar/index.jsx"
import Activate from "./pages/auth/activate.jsx"
import Login from "./pages/auth/login.jsx"

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="auth">
					<Route index element={<Login />} />
					<Route path="activate" element={<Activate />} />
					<Route path="activate/:activateToken" element={<Activate />} />
				</Route>
				<Route
					path="/"
					element={
						<div>
							App <Link to={"profile"}>Profile</Link>
						</div>
					}
				></Route>
				<Route
					path="/profile"
					element={
						<div>
							My Profile <br />
							<Link to={"/"}>Home</Link>
						</div>
					}
				></Route>
				<Route path="*" element={<Notfound />} />
			</Routes>
		</>
	)
}

export default App
