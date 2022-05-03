import React, { useState } from 'react'
import Section from '../../common/Section'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [status, setStatus] = useState([])
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault()
		const data = {
			email: email,
			password: password
		}

		axios.post('/api/users/signin', data)
			.then(response => {
				handleSession(response.data)
			})
			.catch(error => {
				setError('Sorry. Invalid email or password')
			});
	}

	const handleSession = (props) => {
		const {status, token} = props

		if (status == 'success') {
			localStorage.setItem('token',token)
			navigate('/')
		}
	}

	return (
		<Section>
			<div className="row">
				<div className="col-md-4 offset-4">
					<form onSubmit={handleSubmit}>
						<div class="form-group">
							<label for="" class="form-label">Email</label>
							<input
								type="email"
								name="" id=""
								value={email}
								class="form-control"
								onChange={(e) => setEmail(e.target.value)} />
						</div>
						<div class="form-group">
							<label for="" class="form-label">Password</label>
							<input
								type="password"
								name=""
								value={password}
								class="form-control"
								onChange={(e) => setPassword(e.target.value)} />
						</div>
						<button type="submit" class="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		</Section>
	)
}

export default Login