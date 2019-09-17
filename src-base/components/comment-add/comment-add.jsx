import React,{Component} from 'react'
export default class CommentAdd extends Component{

    state = {
        username:'',
        content:''
    }

    handleSubmit = ()=>{
        //收集数据
        const {username,content}=this.state
        //更新App里的comments数组
        this.props.addComment({username:username,content:content})
        //清除数据
        this.setState({username:'',content:''})

}

    render(){
        const {username,content} = this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名"
                               value={username}
                               onChange={(event)=>{
                                   const username=event.target.value.trim()
                                   this.setState({username:username})
                               }}
                        />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容"
                                  value={content}
                                  onChange={(event)=>{
                                      const content=event.target.value.trim()
                                      this.setState({content:content})
                                  }}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
