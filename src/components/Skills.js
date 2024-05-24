import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.png"; //95
import meter2 from "../assets/img/meter2.png"; //80
import meter3 from "../assets/img/meter3.png"; //90
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<Container>
				<Row>
					<Col>
						<div className="skill-bx">
							<h2>Skills</h2>
							<p>Web Development, Software Development, Database Query Optimization, Graphic Design</p>
							<Carousel responsive={responsive} infinite={true} className="skill-slider">
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter1} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>PHP</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter1} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>Laravel</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter1} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>CodeIgniter</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter2} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>React</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter1} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>Bootstrap</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter1} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>MySQL</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter1} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>VB.NET</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter3} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>C#</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter3} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>Git</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter1} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>Figma</h5>
								</div>
								<div className="item">
									<TrackVisibility>
										{({ isVisible }) => <img src={meter1} alt="meter" className={isVisible ? "animate__animated animate__rotateIn" : ""} />}
									</TrackVisibility>
									<h5>Photoshop</h5>
								</div>
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>
			<img className="background-image-left" src={colorSharp} alt="bg" />
		</section>
	);
};
