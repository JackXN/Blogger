import {useRouter} from 'next/router';
import {useState} from 'react';

import {Box, Button, Text} from '@chakra-ui/react'; 

const PostCard = ({post}) => {

    return (
        <>
        <li>
            <Text as='h1'>{post.title}</Text>
<Text as='p'>{post.content}</Text>
<small>{new Date(post.createdAt).toLocaleDateString()}</small>
        <br/>
        <Button>{'Publish'}</Button>
        <Button>
            {'Delete'}
        </Button>
        </li>
    </>
    )
}


export default PostCard;