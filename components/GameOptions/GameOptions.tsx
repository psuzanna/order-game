import { useState, MouseEventHandler } from 'react';
import { useGlobalContext, gameOptions, orderItem } from '../../pages/GlobalContext';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
//import { countMark, valueMark } from '../../pages';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import { OrderItem } from '../GameInner/OrderItems/OrderItem/OrderItem';

import styles from "../GameOptions/GameOptions.module.scss"

interface GameOptionsProps {
   /*countMarks: countMark[],
   valueMarks: valueMark[],*/
   closeModal: MouseEventHandler,
}


export const GameOptions: React.FC<GameOptionsProps> = ({ closeModal }) => {
   const { countMarks } = useGlobalContext()
   const { valueMarks } = useGlobalContext()
   const { gameOptions, setGameOptions } = useGlobalContext()
   const { setOrder_items, setOrder_items_sort } = useGlobalContext()
   const [alignment, setAlignment] = useState('ascending');
   const [middleGameOptions, setMiddleGameOptions] = useState<gameOptions>(gameOptions)

   const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
   ) => {
      console.log(newAlignment)
      middleGameOptions.direction = newAlignment
      setAlignment(newAlignment)
      setMiddleGameOptions(middleGameOptions);
   };

   const countChange = (event: Event, value: number | Array<number>, activeThumb: number) => {
      //console.log(event, value)
      middleGameOptions.itemsCount = value;
      setMiddleGameOptions(middleGameOptions)
   }

   const itemsValueStartChange = (event: Event, value: number | Array<number>, activeThumb: number) => {
      console.log(event, value)
      middleGameOptions.itemsValueStart = value;
      setMiddleGameOptions(middleGameOptions)
   }

   const startGame = () => {
      setGameOptions(middleGameOptions)
      let order_items: orderItem[] = []
      let order_items_sort: orderItem[]

      let val = Array.isArray(gameOptions.itemsValueStart) ? gameOptions.itemsValueStart[0] : gameOptions.itemsValueStart
      console.log(val)
      let max = 1
      switch (val) {
         case 1: max = 1;
            break;
         case 2: max = 9;
            break;
         case 3: max = 19;
            break;
         case 4: max = 55;
            break;
         case 5: max = 99;
            break;
         case 6: max = 999;
            break;
         //default: 9;
      }
      console.log(max)
      let randomSymbol = new Set<number | string>()
      const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
      let value = max == 1 ? "A" : Math.floor(Math.random() * (max - 0 + 1) + 0)
      while (randomSymbol.size < gameOptions.itemsCount) {
         if (max == 1) {
            value = letters[Math.floor(Math.random() * letters.length)];
         }
         else {
            value = Math.floor(Math.random() * (max - 0 + 1) + 0)
         }
         randomSymbol.add(value)
      }

      let symbolsArr: Array<number | string> = []
      symbolsArr = Array.from(randomSymbol)
      for (let i = 0; i < gameOptions.itemsCount; i++) {
         console.log(i)
         let img = `./order_el-g${i + 1}.png`

         order_items.push({
            img: img,
            value: symbolsArr[i],
            ordered: false
         })

      }

      if (gameOptions.direction == "ascending") {
         order_items_sort = [...order_items].sort((prev, next) => {
            if (prev.value > next.value) return 1
            else { return -1 }
         })
      }
      else {
         order_items_sort = [...order_items].sort((prev, next) => {
            if (prev.value < next.value) return 1
            else { return -1 }
         })
      }

      setOrder_items(order_items)
      setOrder_items_sort(order_items_sort)
   }
   return (
      <div className={styles.gameOptions}>
         <Box sx={{ width: 300 }}>
            <h2>Кол-во элеметов</h2>
            <Slider
               aria-label="Кол-во элеметов"
               defaultValue={2}
               /*valueLabelFormat={valueLabelFormat}*/
               /*getAriaValueText={valuetext}*/
               step={null}
               min={2}
               max={5}
               valueLabelDisplay="auto"
               marks={countMarks}
               onChange={countChange}
            />
         </Box>
         <Box sx={{ width: 500 }}>
            <h2>Значения</h2>
            <Slider
               aria-label="Значения"
               defaultValue={1}
               /*valueLabelFormat={valueLabelFormat}
               /*getAriaValueText={5}*/
               step={null}
               min={1}
               max={6}
               valueLabelDisplay="auto"
               marks={valueMarks}
               onChange={itemsValueStartChange}
            />
         </Box>
         <Box>
            <ToggleButtonGroup
               color="primary"
               value={gameOptions.direction}
               exclusive
               onChange={handleChange}
               aria-label="Platform"
            >
               <ToggleButton value="ascending">По возростанию</ToggleButton>
               <ToggleButton value="descending">По убыванию</ToggleButton>
            </ToggleButtonGroup>
         </Box>
         <Box onClick={startGame}>
            <Button variant="contained" onClick={closeModal}>Играть</Button>
         </Box>
      </div>
   )
}