import Nav from "../components/Nav";
import {useState} from 'react';
import styles from '../styles/Home.module.css';
import {Box, Button} from '@chakra-ui/react';

const AddPost = () => {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');
const [error,setError] = useState('');
const [message, setMessage] = useState('');


const handlePost = async (e) => {
    e.preventDefault();

    //Reset the error and message
setError('');
setMessage('');

// Field Check
if(!title || !content) return setError('All fields are required')
};

return (
    <>
    <Box>
        <Nav/>
        <Box className={styles.container}>
        <form onSubmit={handlePost} className={styles.form}>
            {error ? (
                <Box className={styles.formItem}>
                    <h3 className={styles.error}>{error}</h3>
                </Box>
            ) : null} 
            {message ? (
                <Box className={styles.formItem}>
                    <h3 className={styles.message}>{message}</h3>
                </Box>
            ) : null}
            <Box className={styles.formItem}>
                <label>Title</label>
                <input
                type={text}
                name='title'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                placeholder='title'
                />
            </Box>
            <Box className={styles.formItem}>
                <label>Content</label>
                <textarea
                name='content'
                onChange={(e) => setContent(e.target.value)}
                placeholder='Post Content'
                value={content}
                ></textarea>
            </Box>
            <Box className={styles.formItem}>
                <Button type='submit'>Add Post</Button>
            </Box>
        </form>
        </Box>
    </Box>
    </>
)

}

export default AddPost;