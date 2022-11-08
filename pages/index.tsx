
import { gameOptions, GlobalContext, orderItem } from './GlobalContext'
import { DragEventHandler, EffectCallback, MouseEventHandler, useEffect, useState } from 'react';

import { GameStartModal } from '../components/Modal/GameStartModal/GameStartModal';
import { GameEndModal } from '../components/Modal/GameEmdModal/GameEndModal';

import styles from '../styles/Home.module.css'
import { format } from 'path';
import { GameInner } from '../components/GameInner/GameInner';


const GAME_CONFIG_DEFAULT = {
  itemsCount: 2,
  itemsValueStart: 1,
  direction: 'ascending'
}


const countMarks = [
  {
    value: 2,
    label: 2
  },
  {
    value: 3,
    label: 3
  },
  {
    value: 4,
    label: 4
  },
  {
    value: 5,
    label: 5
  }
]

const valueMarks = [
  {
    value: 1,
    label: 'A'
  },
  {
    value: 2,
    label: '9'
  },
  {
    value: 3,
    label: '19'
  },
  {
    value: 4,
    label: '50'
  },
  {
    value: 5,
    label: '99'
  },
  {
    value: 6,
    label: '999'
  }
]



export default function Home() {

  const [gameOptions, setGameOptions] = useState<gameOptions>(GAME_CONFIG_DEFAULT)
  const [dragEl, setDragEl] = useState('0')
  const [order_items, setOrder_items] = useState<orderItem[]>([])
  const [order_items_sort, setOrder_items_sort] = useState<orderItem[]>([])
  const [showModal, setShowModal] = useState(true)
  const [gameEnd, setGameEnd] = useState<{ showGameEnd: boolean, status: string }>({ showGameEnd: false, status: "win" })

  return (
    <GlobalContext.Provider value={{ gameOptions, setGameOptions, order_items, setOrder_items, order_items_sort, setOrder_items_sort, countMarks, valueMarks, dragEl, setDragEl, gameEnd, setGameEnd, showModal, setShowModal }}>
      {showModal}
      <div className={styles.container} data-f={dragEl}>
        {showModal ?
          <GameStartModal />
          : null}
        {
          gameEnd.showGameEnd == true ?
            <GameEndModal />
            : null
        }
        <GameInner />
      </div>
    </GlobalContext.Provider >
  )
}
