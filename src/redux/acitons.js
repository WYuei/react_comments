/* 包含了所有的action creator（action的工厂函数 */
import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENT} from './action-types'

//同步添加
export const addComment = (comment) => ({
    type:ADD_COMMENT,
    data:comment
})
//同步删除
export const deleteComment = (index) => ({
    type:DELETE_COMMENT,
    data:index
})

//同步接收comments
const receiveComments =(comments)=>({
    type:RECEIVE_COMMENT,
    data:comments
})
//异步从后台获取
export const getComments = () =>{
    return dispatch => {
        setTimeout(()=>{
            const comments = [
                {username:'Arya Stark',content:'Valar Morghulis'},
                {username:'Hodor',content:'Hold the door'}
            ]
            dispatch(receiveComments(comments))
        },1000)

    }
}
