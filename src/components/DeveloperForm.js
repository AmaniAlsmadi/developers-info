import {React} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { actionType } from "./Developer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function DeveloperForm({dispatch}) {


    const handelSubmit = (event) => {
        event.preventDefault();
        if (!event.target.developer.value) return;
        dispatch ({
            type: actionType.ADD_DEVELOPER,
            payload: {
                developer: event.target.developer.value,
                programmingLanguage: event.target.progLanguage.value,
                technologies: event.target.technologies.value,
                favFood: event.target.favFood.value,
                favDrink: event.target.favDrink.value,
            }
        });
    }


    return (
        <Card style={{ width: '25rem' }} className='cardForm'>
        <Form onSubmit={handelSubmit}>
          

                <Form.Group className="mb-3" >
                    <Form.Label>Developer Name</Form.Label>
                    <Form.Control id="developer" />
                </Form.Group>


                <Form.Group className="mb-3" >
                    <Form.Label>Programming Language</Form.Label>
                    <Form.Select  id="progLanguage">
                        <option value="JavaScript">JavaScript</option>
                        <option value="Java">Java</option>
                        <option value="Python">Python</option>
                        <option value="PHP">PHP</option>
                    </Form.Select>
                </Form.Group>


                <Form.Group className="mb-3" >
                    <Form.Label >Technologies</Form.Label>
                    <Form.Select id="technologies">
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                        <option value="Flutter">Flutter</option>
                    </Form.Select>


                    <Form.Group className="mb-3" >
                        <Form.Label>Favorite Food</Form.Label>
                        <Form.Control id="favFood" />
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Favorite Drink</Form.Label>
                        <Form.Control id="favDrink" />
                    </Form.Group>

                </Form.Group>
                <Button variant="info" type="submit" >Add</Button>
        </Form>
        </Card>

    );
}

export default DeveloperForm;