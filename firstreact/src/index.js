import React from 'react';
import ReactDOM from 'react-dom'
import FirstFriend from './FirstComponent';

import Name from './components/Name';
import Comment from "./commentComponent/Comment";
import LifeCycleComponent from "./LifeCycle/LifeCycleComponent"
import FormComponent from "./formComponent/formComponent"
import ControlledForm from "./formComponent/controlledForm"
import RemoteData from "./APIComponent/RemoteData"


var position = document.getElementById("rootcomponent")

var position2 = document.getElementById("container2")

var position3=document.getElementById("LifeCycle")

var position4=document.getElementById("Form")

var position5=document.getElementById("control")

ReactDOM.render(
        <div>
            <FirstFriend location="Chennai">Prafful
            </FirstFriend>
            <Name fcolor = "purple" bcolor="burlywood" >P</Name>
            <Name fcolor="golderrod" bcolor="pink">N</Name>
            <Name fcolor="brown" bcolor="yellow">D</Name>
           <br></br>
           <br></br>

           
        </div>
        , position)

ReactDOM.render(
                <div>    
                <Comment name="Prafful Daga">React is fun to work with!</Comment>
                <Comment name="Adi">Session was boring!</Comment>
                <Comment name="Pradhi">Too much work is no good!</Comment>
                <Comment name="Luka">Tired!!!</Comment>
                </div>
                , position2)
                
                
ReactDOM.render(<LifeCycleComponent></LifeCycleComponent>,position3)

ReactDOM.render(<FormComponent></FormComponent>,position4)

ReactDOM.render(<div><ControlledForm></ControlledForm>
<RemoteData></RemoteData>
</div>,position5)

        
