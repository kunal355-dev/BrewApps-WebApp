import { Card } from 'react-bootstrap';
import './Cards.css'

const Cards = (props) => (
    <Card>
        <Card.Img variant="top" src={props.src} className='card-image-top' />
        <Card.Body className='bg-dark text-light card-body-custom'>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.description}
            </Card.Text>
        </Card.Body>
    </Card>
)

export default Cards;