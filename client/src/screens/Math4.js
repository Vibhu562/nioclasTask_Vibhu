import React, { Component } from 'react';
import {MathJaxContext} from "better-react-mathjax"
import {MathJax} from 'better-react-mathjax';
class Math4 extends Component {
    

    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch(
"https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=BinomialTheorem_4")
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
            <h1 className='mt-3'> Maths Question 4</h1>  {
                items.map((item) => ( 
                <ol key = { item.QuestionID } >
                    <MathJaxContext>
                   
                    { item.Question }
                    </MathJaxContext> 
                    </ol>
                ))
            }
            <div className='row app'>
                <div className='col-md-6 '>
         <a style={{marginLeft:"450px" }} href='/math3'><button  className='btn btn-info text-dark fw-bold'  >Previous</button></a>
         </div>
         <div className='col-md-6'>
            <a style={{marginRight:"450px" , height:"20px"}} href='/math5'><button style={{width :"80px" , marginTop:"2px"}} className='btn  btn-info text-dark fw-bold'  >Next</button></a>
            </div></div>

        </div>
    );
}
}
 
export default Math4;