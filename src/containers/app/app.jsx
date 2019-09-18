import React,{Component} from 'react'
import CommentAdd from "../../components/comment-add/comment-add";
import CommentList from "../../components/comment-list/comment-list";

import {connect} from '../../../node_modules/react-redux'

import {addComment,deleteComment,getComments} from '../../redux/acitons'

class App extends Component{
   /* constructor(props)
    {
        super(props)
        this.state = {
            comments:[
                {username:'Arya Stark',content:'Valar Morghulis'},
                {username:'Hodor',content:'Hold the door'}
            ]
        }
    }*/
    /*addComment=(comment) =>{
        let {comments} = this.state
        comments.unshift(comment)
        this.setState(comments)
    }
    deleteComment = (index) =>{
        let {comments} = this.state
        comments.splice(index,1)
        this.setState(comments)
    }*/
    componentDidMount() {
        this.props.getComments()
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
                    <CommentAdd addComment={this.props.addComment} />
                    <CommentList comments={this.props.comments} deleteComment={this.props.deleteComment} />
                </div>
            </div>
        )
    }
}

export default connect(
    state=>({comments:state}), //state就是一个comments数组
    {addComment,deleteComment,getComments}
)(App)
