
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import { CheckButton } from '../components/CheckButton';


export const FormPesquisa = () => {
  return (
    <Container>
      <Row>
        <Row md={2}>
          <Col md="4" >
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label>Digite seu nome:</Form.Label>
              <Form.Control required type="text" placeholder="Digite seu nome" />
            </Form.Group>           
          </Col> 

          <Col md="auto">
            <Form.Group as={Col} controlId="validationCustom01">    
              <Form.Label>Digite sua data de nascimento:</Form.Label>
              <Form.Control required type="date" />
            </Form.Group>                           
          </Col>     
        </Row>  
        
        <Form.Group as={Row} controlId="validationCustom01">    
          <Form.Label>1 - Você normalmente organiza e acompanha suas despesas e receitas mensais?</Form.Label>
          <CheckButton />
        </Form.Group>

        <Form.Group as={Row} controlId="validationCustom01">    
          <Form.Label>2 - Você enfrenta consegue economizar dinheiro regularmente?</Form.Label>
          <CheckButton />
        </Form.Group>
      
      </Row>
    </Container>
  )
}
