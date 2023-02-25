import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { API } from "../../store.js"

const Activate = () => {
	const { activateToken: token } = useParams()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [alert, setAlert] = useState("")

	useEffect(() => {
		console.log(token)
		if (!token) {
			return navigate("/")
			// window.location.replace('/');
		}
		const activate = async () => {
			setLoading(true)
			try {
				const req = await axios.post(`${API}/auth/activate/${token}`)
				console.log(req.data)
				setAlert("User activated Please login")
			} catch (error) {
				setAlert(error.response.data.msg || error.response.data.message)
				console.log(error)
			}
			setLoading(false)
		}
		activate()
	}, [token, navigate])

	return (
		<div>
			<h3>
				<center>Activate Your Account</center>
			</h3>

			<br />
			<p>{alert}</p>
		</div>
	)
}

export default Activate
