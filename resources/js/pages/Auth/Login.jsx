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
		const { status, token } = props

		if (status == 'success') {
			localStorage.setItem('token', token)
			navigate('/')
		}
	}

	return (
		<Section>
			<div className="row">
				<div className="col-md-8 offset-2">
					<div className="auth-bg text-white">
						<div className="row align-items-center">
							<div className="col">
								<h3>Dont have an account?</h3>
								<p className='small'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore in, facilis eos possimus quasi nisi dicta commodi accusantium, vitae totam officia.</p>
							</div>
							<div className="col">
								<form className='position-relative' onSubmit={handleSubmit}>
									<div className="form-content">
										<div className="form-group">
											<input
												type="email"
												name="" id=""
												value={email}
												className="form-control rounded-0"
												placeholder='Email'
												onChange={(e) => setEmail(e.target.value)} />
										</div>
										<div className="form-group">
											<input
												type="password"
												name=""
												value={password}
												className="form-control rounded-0"
												placeholder='Password'
												onChange={(e) => setPassword(e.target.value)} />
										</div>
										
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Login