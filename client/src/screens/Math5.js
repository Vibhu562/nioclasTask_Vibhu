import React, { Component } from 'react';
import {MathJaxContext} from "better-react-mathjax"

class Math5 extends Component {
    

    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch(
"https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_5")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
   
        return (
        <div className = "">
            <h1 className='mt-3'> Maths Question 5</h1>  {
                items.map((item) => ( 
                <ol key = { item.QuestionID } >
                    <MathJaxContext>
                    { item.Question }
                    </MathJaxContext> 
                    </ol>
                ))
            }
                        <a style={{marginLeft:"0px"}} href='/math4'><button  className='btn btn-info text-dark fw-bold'  >Previous</button></a>


        </div>
    );
}
}
 
export default Math5;