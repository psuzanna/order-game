import { useState, MouseEventHandler } from 'react';
//import { countMark, valueMark } from '../../pages';
import { GameOptions } from '../../GameOptions/GameOptions';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import styles from '../Modal/BasicModal.module.scss'
import { useGlobalContext } from '../../../pages/GlobalContext';
const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 600,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 0,
};

interface ModalProps {

}

export const GameStartModal: React.FC<ModalProps> = ({ }) => {
   const { showModal, setShowModal } = useGlobalContext();
   const [open, setOpen] = useState(true);
   const handleOpen = () => setOpen(true);
   const handleClose: MouseEventHandler = () => {
      setOpen(false)
      setShowModal(false)
   };
   return (
      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            <GameOptions closeModal={handleClose} />
         </Box>
      </Modal>

   )
} 