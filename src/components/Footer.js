import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'

const Footer = () => {
    return (
        <footer className='site-footer'>
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col xs='4' sm='2' className="text-center">
                        <h5>Links</h5>
                        <ul className='list-unstyled'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/gallery'>Rock Gallery</Link>
                            </li>
                            <li>
                                <Link to='/quiz'>Rock Quiz</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='6' sm={{ size: 3, offset: 1 }} className='text-center'>
                        <h5>Social</h5>
                        <a
                            className='btn btn-social-icon btn-instagram'
                            href='http://instagram.com/'
                        >
                            <i className='fa fa-instagram' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-facebook'
                            href='http://www.facebook.com/'
                        >
                            <i className='fa fa-facebook' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-twitter'
                            href='http://twitter.com/'
                        >
                            <i className='fa fa-twitter' />
                        </a>{' '}
                        <a
                            className='btn btn-social-icon btn-google'
                            href='http://youtube.com/'
                        >
                            <i className='fa fa-youtube' />
                        </a>
                    </Col>
                    <Col sm='3' className='text-center'>
                        <a
                            role='button'
                            className='btn btn-link'
                            href='tel:+12065551234'
                        >
                            <i className='fa fa-phone' /> 1-206-555-1234
                        </a>
                        <br />
                        <a
                            role='button'
                            className='btn btn-link'
                            href='mailto:notreal@notreal.co'
                        >
                            <i className='fa fa-envelope-o' /> rock-app@geology.co
                        </a>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col>
                        Created by Claire Peyre & Aaron Escobar
                    </Col>
                    <Col>
                        Powered by React
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;