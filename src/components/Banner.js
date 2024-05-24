import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = ["Web Developer", "Software Developer", "Full Stack Developer"];
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(200 - Math.random() * 100);
	const period = 1500;
	const [activeLink, setActiveLink] = useState("home");
	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div className={isVisible ? "animate__animated animate__pulse" : ""}>
									<span className="tagline">Made with React</span>
									<h1 className="txt-rotate">
										{`Hi I'm Dominic`}
										<br />
										<span className="wrap">{text}</span>
									</h1>
									<p>
										{/* Passionate about driving innovation and adding value to organizations, I am an IT graduate with expertise in web
										development, software development, and project management, possessing exceptional analytical and problem-solving
										capabilities. */}
										A passionate and result-driven web developer dedicated to creating extraordinary online experiences. With boundless
										enthusiasm and a commitment to excellence, I approach every project with meticulous effort and consistency. My mission
										is to transform ideas into stunning, functional websites that exceed expectations.
										{/* <p>
													Let's collaborate to push the boundaries of web development, crafting innovative solutions that drive
													success and leave a lasting impact. Welcome to a space where your vision meets my expertise.
												</p> */}
									</p>
									<Nav>
										<Nav.Link
											href="#contact"
											className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
											onClick={() => onUpdateActiveLink("contact")}
										>
											<button>
												Let's Connect <ArrowRightCircle size={25} />
											</button>
										</Nav.Link>
									</Nav>
								</div>
							)}
						</TrackVisibility>
					</Col>
					{/* <Col xs={12} md={6} xl={5}>
						<img src={headerImg} alt="Header Img" />
					</Col> */}
				</Row>
			</Container>
		</section>
	);
};
