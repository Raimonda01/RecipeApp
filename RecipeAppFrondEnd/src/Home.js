import React,{Component} from "react";
import Image from './images/food1.jpg';


export class Home extends Component{

    render(){
        return(
            <div class="landing-image">
                <img src={Image} alt=""/>
            </div>
        )
    }
}