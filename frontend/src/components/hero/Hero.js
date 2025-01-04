import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({books}) => {
  return (
    <div>
        <Carousel>
            {
                books.map((book) =>{
                    return (
                        <Paper>
                            <div className='book-card-container'>
                                <div className='book-card'>
                                    <div className='book-detail'>
                                        <div className='book-poster'>
                                            <img src={book.poster} alt={book.title} />
                                        </div>
                                        <div className='book-title'>
                                            <h4>{book.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero