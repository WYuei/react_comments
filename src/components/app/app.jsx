import React,{Component} from 'react'
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";
export default class App extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            comments:[
                {username:'Arya Stark',content:'Valar Morghulis'},
                {username:'Hodor',content:'Hold the door'}
            ]
        }
    }
    addComment=(comment) =>{
        let {comments} = this.state
        comments.unshift(comment)
        this.setState(comments)
    }
    deleteComment = (index) =>{
        let {comments} = this.state
        comments.splice(index,1)
        this.setState(comments)
    }
    render(){
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>A Song of Ice and Fire</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment} />
                    <CommentList comments={this.state.comments} deleteComment={this.deleteComment} />
                </div>
            </div>
        )
    }
}
