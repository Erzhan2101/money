import React, {useState} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button, TextField} from "@mui/material";
import Modal from "@mui/material/Modal";
import {useDispatch} from "react-redux";

const ModalUser = () => {

    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(true);
    const [username, setUsername] = useState("")
    const handleChange = (e) => setUsername(e.target.value)

    const handleSubmit = () => {
        dispatch({type: 'ADD_USERNAME', payload: username})
        setOpen(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #fff',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px'
    };

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <form onSubmit={handleSubmit}>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Введите ваше имя
                    </Typography>
                    <TextField label='Введите имя'
                               variant='standard'
                               sx={{width: '100%', marginBottom: '20px'}}
                               color='primary'
                               name='username'
                               value={username}
                               onChange={handleChange}
                               type='text'
                               required/>
                    <Button variant='contained'
                            sx={{display: 'block', marginLeft: 'auto'}}
                            type='submit'
                    >Далее</Button>
                </Box>
            </form>
        </Modal>
    );
};

export default ModalUser;