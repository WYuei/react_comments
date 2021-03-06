import React,{Component} from 'react'
import './comment-list.css'
import CommentItem from "../comment-item/comment-item";
export default class CommentList extends Component{
    constructor(props)
    {
        super(props)
    }
    render(){
        const {comments,deleteComment}=this.props
        const display=comments.length===0 ? 'block':'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {comments.map((comment,index)=>(
                        <CommentItem key={index} comment={comment} deleteComment={deleteComment} index={index}/>
                    ))}
                </ul>
            </div>
        )
    }
}
