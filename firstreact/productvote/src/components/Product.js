import React from 'react';
import '../../node_modules/semantic-ui/dist/semantic.css'


class Product extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            vote: this.props.vote
        }
        this.upVote = this.upVote.bind(this)
        this.downVote = this.downVote.bind(this)

    }
    
    upVote(){
        console.log("Upvote called");
        this.setState({vote: this.state.vote + 1})
    }

    downVote(){
        console.log("Downvote called");
        this.setState({vote: this.state.vote - 1})
    }

    render() {
        
       
        
        
        return ( <div className="item">
                    <div className="image">
                        <img src={this.props.productImage} />
                    </div>
                    <div className="middle aligned content">
                        <div className="header">
                        {this.state.vote}
                            <a onClick={this.upVote}>
                                <i className="large caret up icon" />
                            </a>
                            <a onClick={this.downVote}>
                                <i className="large caret down icon" />
                            </a>
                        </div>
                        <div className="description">
                            <a>{this.props.title}</a>
                            <p>{this.props.description}</p>
                        </div>
                        <div className="extra">
                            <span>Submitted By:</span>
                            <img className="ui avatar image" src={this.props.avatarUrl}/>
                        </div>
                    </div>

                </div> );
    }
}
 
export default Product;