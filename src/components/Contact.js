import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
	// EMAIL.JS
	const formInitialDetails = {
		user_name: "",
		user_email: "",
		user_phone: "",
		message: "",
	};
	const form = useRef();
	const [formDetails, setFormDetails] = useState(formInitialDetails);

	const [status, setStatus] = useState({});
	const [showMessage, setShowMessage] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setStatus({});

		emailjs
			.sendForm("service_wqha1rg", "template_39c4afu", form.current, {
				publicKey: "KGsErTw1KyJbqNWfP",
			})
			.then(
				() => {
					// if SUCCESSFUL
					setStatus({ success: true, message: "Message sent successfully" });
					setFormDetails(formInitialDetails);
				},
				(error) => {
					setStatus({ success: false, message: "Something went wrong. Try again later." });
					console.log("FAILED...", error.text);
				}
			);
	};
	useEffect(() => {
		if (status) {
			setShowMessage(true);

			const timer = setTimeout(() => {
				setShowMessage(false);
			}, 5000);

			return () => clearTimeout(timer);
		}
	}, [status]);

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};

	return (
		<section className="contact" id="contact">
			<Container>
				<Row className="align-items-center">
					<Col size={12} md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<img
									className={isVisible ? "animate__animated animate__zoomIn" : "animate__animated animate__zoomOut"}
									src={contactImg}
									alt="Contact Us"
								/>
							)}
						</TrackVisibility>
					</Col>
					<Col size={12} md={6}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
									<h2>Get In Touch</h2>
									<form ref={form} onSubmit={sendEmail}>
										<Row>
											<Col size={12} sm={12} className="px-1">
												<input
													type="text"
													value={formDetails.user_name}
													placeholder="Name"
													name="user_name"
													onChange={(e) => onFormUpdate("user_name", e.target.value)}
												/>
											</Col>
											{/* <Col size={12} sm={6} className="px-1">
												<input
													type="text"
													value={formDetails.lastName}
													placeholder="Last Name"
													onChange={(e) => onFormUpdate("lastName", e.target.value)}
												/>
											</Col> */}
											<Col size={12} sm={6} className="px-1">
												<input
													type="email"
													value={formDetails.user_email}
													placeholder="Email Address"
													name="user_email"
													onChange={(e) => onFormUpdate("user_email", e.target.value)}
												/>
											</Col>
											<Col size={12} sm={6} className="px-1">
												<input
													type="tel"
													value={formDetails.user_phone}
													placeholder="Phone No."
													name="user_phone"
													onChange={(e) => onFormUpdate("user_phone", e.target.value)}
												/>
											</Col>
											<Col size={12} className="px-1">
												<textarea
													rows="6"
													value={formDetails.message}
													placeholder="Message"
													name="message"
													onChange={(e) => onFormUpdate("message", e.target.value)}
												></textarea>
												<button type="submit" value="submit">
													<span>Send</span>
												</button>
												{/* <p>
													Let's collaborate to push the boundaries of web development, crafting innovative solutions that drive
													success and leave a lasting impact. Welcome to a space where your vision meets my expertise.
												</p> */}
											</Col>
										</Row>
										<Row>
											{showMessage && (
												<Col>
													<p className={status.success === false ? "danger mt-3" : "success mt-3"}>{status.message}</p>
												</Col>
											)}
										</Row>
									</form>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
