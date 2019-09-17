import React,{Component} from 'react'
import './comment-item.css'
export default class CommentItem extends Component{
    handleDelete=()=>{
        const {comment,index,deleteComment} = this.props
        deleteComment(index)
        //再调用函数删除
    }

    render(){
        const {comment}=this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#" onClick={this.handleDelete}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}
