import { createContext, useContext } from "react"
import { DragEventHandler, EffectCallback, MouseEventHandler, useEffect, useState, SetStateAction, Dispatch } from 'react';
import { GameOptions } from "../components/GameOptions/GameOptions";

export interface orderItem {
   value: number | string,
   img: string,
   ordered: boolean
}
export interface countMark {
   value: number,
   label: number
}
export interface valueMark {
   value: number,
   label: string
}
export interface gameOptions {
   itemsCount: number | Array<number>,
   itemsValueStart: number | Array<number>,
   direction: string
}
export type GlobalContent = {
   gameOptions: gameOptions,
   setGameOptions: Dispatch<SetStateAction<gameOptions>>,
   order_items: orderItem[],
   setOrder_items: Dispatch<SetStateAction<orderItem[]>>,
   setOrder_items_sort: Dispatch<SetStateAction<orderItem[]>>,
   order_items_sort: orderItem[],
   dragEl: string,
   setDragEl: Dispatch<SetStateAction<string>>,
   countMarks: countMark[]
   valueMarks: valueMark[],
   gameEnd: {
      showGameEnd: boolean,
      status: string
   }
   setGameEnd: Dispatch<SetStateAction<{ showGameEnd: boolean, status: string }>>,
   showModal: boolean,
   setShowModal: Dispatch<SetStateAction<boolean>>,
   /*dragStart: (e: MouseEventHandler) => void,
   dragOver: MouseEventHandler,
   dragLeave: MouseEventHandler,
   dragEnd: MouseEventHandler,
   drop: MouseEventHandler,*/

}
export const GlobalContext = createContext<GlobalContent>({
   /*copy: 'Hello World', // set a default value
   setCopy: () => { },*/

   gameOptions: {
      itemsCount: 2,
      itemsValueStart: 1,
      direction: 'ascending'
   },
   setGameOptions: ((s) => s),

   order_items: [
      {
         img: './order_el-g1.png',
         value: 1000,
         ordered: false,
      },
      {
         img: './order_el-g2.png',
         value: -10,
         ordered: false,

      },
      {
         img: './order_el-g3.png',
         value: 0,
         ordered: false,

      },
      {
         img: './order_el-g4.png',
         value: 45,
         ordered: false,
      },

   ],
   setOrder_items: ((s) => s),
   order_items_sort: [],
   setOrder_items_sort: ((s) => s),
   dragEl: '',
   setDragEl: ((s) => s),
   gameEnd: { showGameEnd: false, status: "win" },
   setGameEnd: ((s) => s),
   showModal: true,
   setShowModal: ((s) => s),
   countMarks: [
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
   ],

   valueMarks: [
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

   /*dragStart: (el) => {
   },
   dragLeave: (el) => {
      el.preventDefault()
   },
   dragOver: (el) => {
      el.preventDefault();
   },
   drop: (el) => {
      el.preventDefault();
   },
   dragEnd: (el) => {
      el.preventDefault()
   }*/
})
export const useGlobalContext = () => useContext(GlobalContext)