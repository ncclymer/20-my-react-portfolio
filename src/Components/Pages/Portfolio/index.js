import React from "react";
import Card from "react-bootstrap/Card";
import { FaGithub, FaRocket } from "react-icons/fa";

const Portfolio = () => {
    const tbc = require("../../../assets/img/tbclp.png").default;
    const calc = require("../../../assets/img/calc.png").default;
    const techBlog = require("../../../assets/img/techblog.png").default;
    const budgetTracker = require("../../../assets/img/budget-tracker.png").default;
    const noteTaker = require("../../../assets/img/note-taker.png").default;
    const workDayScheduler = require("../../../assets/img/work-day-scheduler.png").default;

    return (
        <div>
            <div className="card-container">
                <div className="card-div">
                    <h1>The Bailey Cafe</h1>
                    <Card>
                        <Card.Img variant="left" src={tbc} />
                        <Card.Body className="port-body">
                            Full stack MERN retail web app. It has a react front end, db services provided my mongoatlas, and hosted on Heroku.
                        </Card.Body>
                        <ul>
                            <a href="https://github.com/ncclymer/Baileys-Cafe" target="blank">
                                <li>
                                    <FaGithub />
                                </li>
                            </a>
                            <a href="https://thebaileycafe.herokuapp.com/" target="blank">
                                <li>
                                    <FaRocket />
                                </li>
                            </a>
                        </ul>
                    </Card>
                </div>
                <div className="card-div">
                    <h1>Calculator</h1>
                    <Card>
                        <Card.Img variant="left" src={calc} />
                        <Card.Body className="port-body">
                            A vanilla JS SPA that allows the user to calculate simple arithmatic functions.
                        </Card.Body>
                        <ul>
                            <a href="https://github.com/ncclymer/Calculator" target="blank">
                                <li>
                                    <FaGithub />
                                </li>
                            </a>
                            <a href="https://ncclymer.github.io/Calculator/" target="blank">
                                <li>
                                    <FaRocket />
                                </li>
                            </a>
                        </ul>
                    </Card>
                </div>
                <div className="card-div">
                    <h1>Tech Blog</h1>
                    <Card>
                        <Card.Img variant="left" src={techBlog} />
                        <Card.Body className="port-body">
                            MVC style blog that allows users to view posts. If they want to comment or create posts they must create an account.
                        </Card.Body>
                        <ul>
                            <a href="https://github.com/ncclymer/14-tech-blog" target="blank">
                                <li>
                                    <FaGithub />
                                </li>
                            </a>
                            <a href="https://tech-blog-forum.herokuapp.com/" target="blank">
                                <li>
                                    <FaRocket />
                                </li>
                            </a>
                        </ul>
                    </Card>
                </div>
                <div className="card-div">
                    <h1>Budget Tracker</h1>
                    <Card>
                        <Card.Img variant="left" src={budgetTracker} />
                        <Card.Body className="port-body">
                            SPA that uses express and mongoose. This is also a PWA for offline capability.
                        </Card.Body>
                        <ul>
                            <a href="https://github.com/ncclymer/19-travel-budget" target="blank">
                                <li>
                                    <FaGithub />
                                </li>
                            </a>
                            <a href="https://travel-budget-tracker-pwa.herokuapp.com/" target="blank">
                                <li>
                                    <FaRocket />
                                </li>
                            </a>
                        </ul>
                    </Card>
                </div>
                <div className="card-div">
                    <h1>Work Day Scheduler</h1>
                    <Card>
                        <Card.Img variant="left" src={workDayScheduler} />
                        <Card.Body className="port-body">
                            A Jquery SPA that dynamically updates html and css during the day to indicate time. Allows the user to make and edit notes.
                        </Card.Body>
                        <ul>
                            <a href="https://github.com/ncclymer/05-Day-Planner-Project" target="blank">
                                <li>
                                    <FaGithub />
                                </li>
                            </a>
                            <a href="https://ncclymer.github.io/05-Day-Planner-Project" target="blank">
                                <li>
                                    <FaRocket />
                                </li>
                            </a>
                        </ul>
                    </Card>
                </div>
                <div className="card-div">
                    <h1>Note Taker</h1>
                    <Card>
                        <Card.Img variant="left" src={noteTaker} />
                        <Card.Body className="port-body">
                            Express based note taker. Allows the user to create, edit, and delete notes in browser.
                        </Card.Body>
                        <ul>
                            <a href="https://github.com/ncclymer/11-express-note-taker" target="blank">
                                <li>
                                    <FaGithub />
                                </li>
                            </a>
                            <a href="https://intense-plains-16472.herokuapp.com/" target="blank">
                                <li>
                                    <FaRocket />
                                </li>
                            </a>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
