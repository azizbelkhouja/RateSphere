import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Hero = ({ books }) => {

    const navigate = useNavigate();

    function reviews(bookId) {
        navigate(`/Reviews/${bookId}`);
    }

    return (
        <div className="book-carousel-container">
            <Carousel>
                {
                    books && books.length > 0 ? (
                        books.map((book) => {
                            return (
                                <Paper key={book.imdbId}>
                                    <div className="book-card-container">
                                        <div className="book-card" style={{ "--img": `url(${book.backdrops[0]})` }}>
                                            <div className="book-detail">
                                                <div className="book-poster">
                                                    <img src={book.poster} alt="" />
                                                </div>
                                                <div className="book-title">
                                                    <h4>{book.title}</h4>
                                                </div>
                                                <div className="book-buttons-container">
                                                    <Link to={`/Trailer/${book.trailerLink.substring(book.trailerLink.length - 11)}`}>
                                                        <div className="play-button-icon-container">
                                                            <FontAwesomeIcon className="play-button-icon"
                                                                icon={faCirclePlay}
                                                            />
                                                        </div>
                                                    </Link>

                                                    <div className="book-review-button-container">
                                                        <Button style={{ color: 'white', backgroundColor: 'black', borderColor: 'gold', borderRadius:'0' }} onClick={() => reviews(book.imdbId)} >Reviews</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Paper>
                            )
                        })
                    ) : <h4>Loading...</h4>
                }
            </Carousel>
        </div>
    )
}

export default Hero;
