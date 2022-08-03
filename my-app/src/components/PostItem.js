import React from 'react'
import './PostItem.css'
import styled from 'styled-components'

const h2Styled = {
    backgroundColor: 'yellow',
    color: 'darkmagenta'
}

const StyledPara = styled.p`
    font-size: 1em;
    text-align: center;
    color: palevioletred;
    background-color: lightgreen;
    color: darkblue;
`;

const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

const PostItem = ({ post }) => {
    return (
        <div className='container'>
            <h2 style={h2Styled}>ID - {post.id}</h2>
            <h4 style={{ backgroundColor: 'darkblue', color: 'white' }}>Title - {post.title}</h4>
            <StyledPara>{post.body}</StyledPara>
            <Button>Normal</Button>
            <Button primary>Primary</Button>
        </div>
    )
}

export default PostItem