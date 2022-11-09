import { useState, MouseEventHandler } from 'react';
//import { countMark, valueMark } from '../../pages';
import { GameOptions } from '../../GameOptions/GameOptions';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import styles from '../GameStartModal/GameStartModal.module.scss'
import { makeStyles } from '@material-ui/styles';
import styled from '@emotion/styled'
import { useGlobalContext } from '../../../pages/GlobalContext';
import { red } from '@mui/material/colors';
const style = {
   position: 'absolute' as 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 690,
   bgcolor: 'transparent',
   borderRadius: '40px',
   p: 0,
};
const useStyles = makeStyles({
   root: {
      borderRadius: 3,
   },
   label: {
      color: 'red',
   }
});
const GameOptionsRanges = styled.section`
  color: turquoise;
  height: 100%;
  background: url(./gameOption_overlay.jpg) center/cover no-repeat;
`

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
   const classes = useStyles();
   return (
      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
         className={styles.modal}
      >
         <GameOptionsRanges>
            <Box sx={style}>
               <GameOptions closeModal={handleClose} />
            </Box>
         </GameOptionsRanges>

      </Modal>

   )
} 