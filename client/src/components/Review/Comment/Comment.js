import React from 'react'
import { connect } from 'react-redux'
import dateFormat from 'dateformat'
import PropTypes from 'prop-types'
import { addComment, deleteComment, getUserById } from '../../../Redux/Actions/reviewAction'
import store from '../../../Redux/store'
const mapStateToProps = state =>{
  return {
      user: state.user,
      review: state.review
  }
}

class CommentBox extends React.Component {
    constructor() {
      super();
      
      this.state = {
        showComments: false, // toggle show comment
        comments: [] // comments data
      };

    }

    static propTypes = {
      user: PropTypes.object.isRequired,
      review: PropTypes.object.isRequired,
      addComment: PropTypes.func.isRequired,
      deleteComment: PropTypes.func.isRequired,
      getUserById: PropTypes.func.isRequired
    }

    componentWillReceiveProps(nextProps){
      if((nextProps.review !== this.props.review) && nextProps.review.review){
        console.log(nextProps.review.review.rvComment)
        this.setState({comments: nextProps.review.review.rvComment})
      }
    }
    
    render () {
      const comments = this._getComments();
      let commentNodes;
      let buttonText = 'ความคิดเห็นทั้งหมด';
      
      /* if want to show comment */
      if (this.state.showComments) {
        buttonText = 'ซ่อนความคิดเห็น';
        commentNodes = <div className="comment-list">{comments}</div>;
      }
      
      return(
        <div className="comment-box">
            <h2>แสดงความคิดเห็นต่อรีวิวนี้</h2>
            <CommentForm addComment={this.props.addComment}/>  
            <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
                {buttonText}
            </button>
            <h3>ความคิดเห็น</h3>
            <h4 className="comment-count">
                {this._getCommentsTitle(comments.length)}
            </h4>
            {commentNodes}
        </div>  
      );
    } // end render
    
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
    
    _getComments() {    
      return this.state.comments.map((comment) => {
        return (
          <Comment 
            author={comment.user_id} 
            body={comment.commentPost} 
            key={comment._id}
            id={comment._id}
            date={dateFormat(comment.commentDate, 'dd/mm/yyyy')}
            deleteComment={this.props.deleteComment}
          />
        ); 
      });
    }
    
    _getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'ยังไม่มีความคิดเห็น';
      }else {
        return `${commentCount} ความคิดเห็น`;
      }
    }
  } // end CommentBox component
  
  class CommentForm extends React.Component {
    render() {
      return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <div className="comment-form-fields">
            <br />
            <textarea placeholder="Comment" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
          </div>
          <div className="comment-form-actions">
            <button type="submit">เพิ่มความคิดเห็น</button>
          </div>
        </form>
      );
    } // end render
    
    _handleSubmit(event) { 
      console.log('body',this._body)
      event.preventDefault();   // prevents page from reloading on submit
      let body = this._body.value;
      let user_id = store.getState().user.user._id
      this.props.addComment(body, user_id);
    }
  } // end CommentForm component
  
  class Comment extends React.Component {
    render () {
      return(
        <div className="comment">
          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
          <p className="comment-date">- {this.props.date}</p>
          { store.getState().user.user && (store.getState().user.user._id === this.props.author)?
          <div className="comment-footer">
            <span className="comment-footer-delete" onClick={()=>this.props.deleteComment(this.props.id)}>Delete Comment</span>
          </div>:''
          }
        </div>
      );
    }
  }
  
export default connect(mapStateToProps,{addComment, deleteComment, getUserById})(CommentBox)