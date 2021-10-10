import React, {Component} from "react";
import Axios from 'axios';
import { Form, Col, Row } from "react-bootstrap";


export class AddRecipe extends Component{
    constructor(props){
        super(props);
        this.state = {
            RecipeName: '',
            RecipeCategory: '',
            RecipeInstructions: ''
        };
    }

        onRecipeNameChange = e => {
        this.setState({
            RecipeName: e.target.value
        });
         };
    
      onRecipeCategoryChange = e => {
        this.setState({
            RecipeCategory: e.target.value
        });
      };

      onRecipeInstructionsChange = e => {
        this.setState({
            RecipeInstructions: e.target.value
        });
      };

      handleSubmit = e => {
        e.preventDefault();
        const recipe = {
            RecipeName: this.state.RecipeName,
            RecipeCategory: this.state.RecipeCategory,
            RecipeInstructions: this.state.RecipeInstructions
        };
        Axios.post('/Recipe', recipe).then(res => console.log(res))
          .catch(err => console.log(err));
          window.location.reload(false);
      };

    render(){
        return(
            <div className="post">
                <h3>Add your Recipe here:</h3>
                <Form className="post" onSubmit={this.handleSubmit}>
                    <Row>
                        <Form.Group as={Col} md="4">
                             <Form.Label>Recipe Name</Form.Label> <Form.Control type="text" value={this.state.RecipeName}
                            onChange={this.onRecipeNameChange} required/>
                        </Form.Group>
                         <Form.Group as={Col} md="4">
                            <Form.Label>Recipe Category</Form.Label> <Form.Control type="text" value={this.state.RecipeCategory}
                             onChange={this.onRecipeCategoryChange} required/>
                        </Form.Group>
                  </Row>
                        <Form.Group as={Col} md="8">
                            <Form.Label>Recipe Instructions</Form.Label> <Form.Control as="textarea"
                             onChange={this.onRecipeInstructionsChange} required/>
                        </Form.Group>
                    <button className="btn btn-primary" type="submit">Add Recipe</button>
              </Form>
            </div>

        )
    }
}