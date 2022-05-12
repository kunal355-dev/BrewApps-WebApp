import { Nav } from 'react-bootstrap';

const Category = (props) => (
    <Nav.Link href="#home" className='border rounded-pill category text-center'>{props.icon} <span>{props.title}</span></Nav.Link>
)

export default Category;