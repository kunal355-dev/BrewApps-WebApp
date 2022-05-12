import './App.css';
import { ImFire } from 'react-icons/im';
import { GiCutDiamond } from 'react-icons/gi';
import { GiByzantinTemple } from 'react-icons/gi';
import { GiTornado } from 'react-icons/gi';
import { GiGorilla } from 'react-icons/gi';
import { FcCheckmark } from 'react-icons/fc';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import Category from './Components/Category';
import Cards from './Components/Cards';
import MetaTrapHouse from './assets/meta_trap_house.jpg'
import MetaPartyHouse from './assets/meta_party_house.jpg'
import DesignPattern from './assets/design_pattern.png'
import BoredApes from './assets/bored_apes.png'
import SwimmingAstronaut from './assets/swimming_astronaut.jpg'
import NftCollage from './assets/nft_collage.jpg'

const axios = require('axios');



const App = () => {

  const [data, setData] = useState();

  useEffect(() => {
    axios.get('/title')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [data])

  return (
    <Container fluid>
      <Row className='p-0 ms-4'><h2>{data}</h2></Row>
      <Row className='p-0 ms-2'>
        <p>
          <FcCheckmark />  All NFT's on cyber either belong to or were minted by their creator.
        </p>
      </Row>
      <Navbar collapseOnSelect expand='lg'>
        <Container fluid className='pt-3'>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto gap-4 mt-3">
              <Category icon={<ImFire />} title='24h Trending' />
              <Category title='Latest Shows' />
              <Category title='Most Popular' />
              <Category icon={<GiCutDiamond />} title='In Genesis' />
              <Category icon={<GiByzantinTemple />} title='In Temple' />
              <Category icon={<GiTornado />} title='In Void' />
              <Category icon={<GiGorilla />} title='#BAYC' />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row className='mt-5 gap-3'>
        <Col className='d-flex'><Cards src={MetaTrapHouse} title='Meta Trap House' description='Crypto Trap Houses are the FIRST of its kind on the Ethereum Blockchain.' /></Col>
        <Col className='d-flex'><Cards src={MetaPartyHouse} title='Meta Party House' description='Meta Party House is a collection of 100 unique art pieces.' /></Col>
      </Row>
      <Row className='mt-5 gap-3'>
        <Col className='d-flex'><Cards src={DesignPattern} title='Design Pattern' description='Geometric patterns discovered when playing with colors at Cellular Automaton.' /></Col>
        <Col className='d-flex'><Cards src={BoredApes} title='The Bored Ape Yacht Club' description='The Bored Ape Yacht Club is a collection of 10,000 unique Bored Ape NFTs.' /></Col>
      </Row>
      <Row className='mt-5 gap-3'>
        <Col className='d-flex'><Cards src={SwimmingAstronaut} title='Lonely Astronaut' description='These astronauts got lost in a simple, lonely world.' /></Col>
        <Col className='d-flex'><Cards src={NftCollage} title='The First 5000 Days' description='This art has set a record for a digital artwork in a sale at Christie’s.' /></Col>
      </Row>
    </Container>
  );
}

export default App;
