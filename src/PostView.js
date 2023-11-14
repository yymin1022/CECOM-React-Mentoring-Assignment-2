import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";

const PostView = () => {
    const params = useParams();

    const [postContent, setPostContent] = useState("");
    const [postDate, setPostDate] = useState("");
    const [postTag, setPostTag] = useState("");
    const [postTitle, setPostTitle] = useState("");

    useEffect(() => {
        const postID = params.id;

        let content = "";
        for(let i = 0; i < 20; i++){
            content += `${postID}월 ${postID}일에 작성한 ${postID}번째 포스팅입니다. `;
        }

        setPostContent(content);
        setPostDate(`${postID}월 ${postID}일`);
        setPostTag(`#${postID}`);
        setPostTitle(`${postID}번 포스팅`);
    }, []);

    return (
        <PostContainer>
            <PostTitle>{postTitle}</PostTitle>
            <PostDate>{postDate}</PostDate>
            <PostTag>{postTag}</PostTag>
            <Divider/>
            <PostContent>{postContent}</PostContent>
        </PostContainer>
    )
}

const Divider = styled.div`
    height: 1px;
    width: 100%;
  
    background-color: black;
`;

const PostContainer = styled.div`
    width: 800px;
  
    display: flex;
    flex-direction: column;
    align-items: center;
  
    margin-top: 150px;
`;

const PostContent = styled.p`
    font-size: 20px;
`;

const PostDate = styled.p`
    font-size: 20px;
    margin: 0;
`;

const PostTag = styled.p`
    color: darkgray;
    font-size: 20px;
`;

const PostTitle = styled.p`
    font-size: 30px;
`;

export default PostView;