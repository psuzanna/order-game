import Image from "next/image";
import styles from "../GameWin/GameWin.module.scss";
import Button from '@mui/material/Button';
import { MouseEventHandler, useState } from "react";
import { useGlobalContext } from "../../../pages/GlobalContext";

export const GameWin: React.FC = () => {
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
      <div>
         <div className={styles.gameWin_bg}>
            <Image src={'/gameEnd-bg.png'} alt="Win" width={853} height={560} />
         </div>
         <h4 className={styles.gameWin__inner}>
            <Image
               src={'/win.png'}
               alt={'Победа'}
               width={250}
               height={80} />
            <p className={styles.gameWin__txt}>
               Молодец! Ты успешно <br />справился с заданием!
            </p>

            <Button variant="contained" color="secondary" onClick={playHandle}>Заного</Button>
         </h4>
      </div>
   )
} 