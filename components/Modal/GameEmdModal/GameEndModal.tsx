import { useState, MouseEventHandler } from 'react';
//import { countMark, valueMark } from '../../pages';
import { GameOptions } from '../../GameOptions/GameOptions';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { useGlobalContext } from '../../../pages/GlobalContext';
import { GameWin } from '../../GameInner/GameWin/GameWin';
import styles from '../GameEmdModal/GameEnd.module.scss'
import { url } from 'inspector';
import Image from 'next/image';

//import styles from '../Modal/BasicModal.module.scss'
const style = {
   position: 'absolute' as 'absolute',
   top: 'calc(50% - 50px)',
   left: 'calc(50% - 50px)',
   transform: 'translate(-50%, -50%)',
   width: '830px',
   height: '530px',
   /*border: '2px solid #000',
   boxShadow: 24,*/
   p: 4,
};


interface ModalProps {

}

export const GameEndModal: React.FC<ModalProps> = ({ }) => {
   const { showModal, setShowModal, gameEnd, setGameEnd } = useGlobalContext();
   const [open, setOpen] = useState(true);
   //const handleOpen = () => setOpen(true);
   const handleClose: MouseEventHandler = () => setOpen(false);
   const playHandle: MouseEventHandler = (event) => {
      setShowModal(true)
      gameEnd.showGameEnd = false
      setGameEnd(gameEnd)
   }
   return (
      <Modal
         open={gameEnd.showGameEnd = true}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            {gameEnd.status == 'win' ?
               <GameWin />
               : null}
         </Box>

      </Modal>

   )
} 