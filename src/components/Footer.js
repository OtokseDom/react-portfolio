import { Col, Container, Row } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-item-ceter">
					{/* <MailchimpForm /> */}
					<Col sm={6}>
						<img src={logo} alt="logo" />
					</Col>
					<Col sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a href="https://www.linkedin.com/in/john-dominic-escoto-a29778309" target="_blank">
								<img src={navIcon1} alt="" />
							</a>
							<a href="mailto:imjohndominic08@gmail.com" target="_blank">
								<img src={navIcon4} alt="" />
							</a>
							<a href="https://www.facebook.com/access.any" target="_blank">
								<img src={navIcon2} alt="" />
							</a>
						</div>
						<p>Copyrigt 2024. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
