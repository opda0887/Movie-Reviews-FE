import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import api from "../../api/axiosConfig"
import ReviewForm from "../reviewForm/ReviewForm"

const Reviews = ({getMovieData, movie, reviews, setReviews}) => {
  const revText = useRef()  // Ref for the review text input
  let params = useParams()
  const movieId = params.movieId;
  
  useEffect(() => {
    getMovieData(movieId)
  }, [])

  return (
    <Container>
      <Row>
        <h3>Reviews</h3>
      </Row>
      <Row>
        <Col>
          <img src="{movie?.poster}" alt="The movie poster" />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default Reviews