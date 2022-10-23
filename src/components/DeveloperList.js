import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { actionType } from "./Developer";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../App.css';


function DeveloperList(props) {
    return props.DeveloperList?.length ? (
         <Row xs={1} md={3} >
            {props.DeveloperList?.map((developers, index) =>
                <Col key={index} >
                    <Card style={{ width: '25rem' }} className='cardList'>
                        <Card.Body >
                            <Card.Title>{developers.developer}</Card.Title>
                            <ListGroup>
                                <ListGroup.Item variant="primary">{developers.programmingLanguage}</ListGroup.Item>
                                <ListGroup.Item variant="secondary">{developers.technologies}</ListGroup.Item>
                                <ListGroup.Item variant="success">{developers.favFood}</ListGroup.Item>
                                <ListGroup.Item variant="danger">{developers.favDrink}</ListGroup.Item>
                                <ListGroup.Item variant="info">{developers.id}</ListGroup.Item>
                            </ListGroup>
                            <Button className="deleteB" variant="danger" onClick={() => props.dispatch({ type: actionType.REMOVE_DEVELOPER, payload: { id: developers.id } })} >Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>
            
        )}
        </Row>

    ) : <h3>No Developers</h3>
}

export default DeveloperList;