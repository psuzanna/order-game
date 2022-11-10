import { orderItem } from "../../../GlobalContext.tsx/GlobalContext";
import Image from "next/image";
import styles from "./OrderItem.module.scss";
import { DragEventHandler, EffectCallback, MouseEventHandler, useState } from "react";
import { useGlobalContext } from "../../../GlobalContext.tsx/GlobalContext";

interface orderItemProps {
   orderItem: orderItem,
}

export const OrderItem: React.FC<orderItemProps> = ({ orderItem }) => {
   const { order_items, setOrder_items, dragEl, gameOptions, setGameOptions, setGameEnd } = useGlobalContext()
   const { order_items_sort, setOrder_items_sort } = useGlobalContext()

   //const [order_items_new, setOrder_items] = useState(order_items)
   //const [order_items_sort_new, setOrder_items_sort] = useState(order_items_sort)
   const dragStart: DragEventHandler = (el) => {
      //el.preventDefault()
   }
   const dragLeave: DragEventHandler = (el) => {
   }
   const dragOver: DragEventHandler = (el) => {
      el.preventDefault()
   }
   const drop: DragEventHandler = (el) => {
      el.preventDefault();
   }
   const dragEnd: DragEventHandler = (el) => {

      const dragCurrent = el.currentTarget.getAttribute('data-id')
      console.log(el, dragEl, dragCurrent, order_items)
      if (dragCurrent == dragEl) {
         order_items.forEach((item) => {
            if (item.value == dragCurrent) {
               item.ordered = true
            }
         })
         order_items_sort.forEach((item) => {
            if (item.value == dragCurrent) {
               item.ordered = true
            }
         })
         setOrder_items(order_items)
         const orderedCount = order_items.reduce((sum, item) => {
            item.ordered == true ? sum += 1 : 0
            return sum
         }, 0)
         if (order_items.length == orderedCount) {
            setGameEnd({ showGameEnd: true, status: "win" })
            setGameOptions({
               itemsCount: 2,
               itemsValueStart: 1,
               direction: 'ascending'
            })
         }
         let panel_items
         if (gameOptions.direction == 'ascending') {
            panel_items = [...order_items].sort((prev, next) => {
               if (prev.value > next.value) return 1
               else { return -1 }
            })
         }
         else {
            panel_items = [...order_items].sort((prev, next) => {
               if (prev.value < next.value) return 1
               else { return -1 }
            })
         }
         setOrder_items_sort(panel_items)
      }
   }

   return (
      orderItem.ordered ? null : (
         <li
            key={orderItem.value}
            data-id={orderItem.value}
            className={styles.orderItem}
            draggable={true}
            onDragStart={dragStart}
            onDragOver={dragOver}
            onDragLeave={dragLeave}
            onDragEnd={dragEnd}
            onDrop={drop}
         >
            <Image src={'/' + orderItem.img} alt={orderItem.value + 'a'} width={130} height={130} />
            <span className={styles.orderItem__value}>{orderItem.value}</span>
         </li >
      )

   )
}
