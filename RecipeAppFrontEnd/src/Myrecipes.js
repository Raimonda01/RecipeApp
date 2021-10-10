import React,{Component} from "react";
import { Table } from "react-bootstrap";
import { AddRecipe } from "./AddRecipe";
import Axios from 'axios';


export class Myrecipes extends Component{

    constructor(props){
        super(props);
        this.state= {
            recipes:[]
        }
    }

    componentDidMount(){
        const _this = this;

        Axios.get('/Recipe').then(function (response) {
            _this.setState({
                recipes: response.data
             })
        }) 
    }

    deleteRecipe(id, e){
       if(window.confirm('Are you sure?')){
        const _this = this;
        Axios.delete(`/Recipe/${id}`).then(res => {
        console.log(res);
        console.log(res.data);
  
        const recipes = _this.state.recipes.filter(recipe => recipe.id !== id);
        _this.setState({ recipes });
        window.location.reload(false);
      })}

    }

    render(){
        const _this = this;
        return(
            <div>
                <Table className="mt-0" striped bordered hover size="sm">
                <thead className="bg-success text-dark" >
                    <tr>
                    <th>Recipe Name</th>
                    <th>Category</th>
                    <th>Recipe Instructions</th>
                    <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.recipes.map((recipe) => (
                        <tr>
                        <td>{recipe.recipeName}</td>
                        <td>{recipe.recipeCategory}</td>
                        <td>{recipe.recipeInstructions}</td>
                        <td>
                        <button className="btn btn-danger" onClick={(e) => _this.deleteRecipe(recipe.recipeId, e)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </Table>
                <AddRecipe/>
            </div>
        )
    }
}