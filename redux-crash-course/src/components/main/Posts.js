import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../actions/postAction';

class Posts extends Component {
  state = {
    items: [],
  }
  static getDerivedStateFromProps(props) {
    console.log('>>>>>>>>>>>props-payload', props);
    
  }
  componentDidMount() {
    console.log('>>>>>>>>>>>>>> did mount', this.props.fetchPosts());
  }

  render() {
    console.log('>>>>>>>> tell me', this.props)
    const itemArray = [this.props]
    console.log('>>>>>>>>>array', typeof(itemArray));
    const postItems = itemArray.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1> Posts</h1>
        <p>{itemArray.userId}</p>
       
      </div>
    )
  }
}

Posts.PropTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}
// const mapStateToProps = state => ({
//   posts: state.posts.items, 
// }); 

const mapStateToProps = ({ postReducer }) => {
  const { items } = postReducer;
  return items;
};

const mapActionToProps = {
  fetchPosts,
};
export default connect(mapStateToProps, mapActionToProps)(Posts);
