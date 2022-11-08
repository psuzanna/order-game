import { orderItem, useGlobalContext } from "../../../pages/GlobalContext";
import styles from "./OrderPanel.module.scss";
import Image from "next/image";
import { DragEventHandler, MouseEventHandler } from "react";
interface OrderPanelProps {
   panelItems: orderItem[],
   /*dragStart: DragEventHandler,
   dragEnd: DragEventHandler,
   dragLeave: DragEventHandler,
   dragOver: DragEventHandler,
   drop: DragEventHandler,*/
   //ordered: number[] | string[]
}


export const OrderPanel: React.FC<OrderPanelProps> = ({ }) => {
   const { order_items_sort, setOrder_items_sort, dragEl, setDragEl, gameOptions } = useGlobalContext()
   const { order_items } = useGlobalContext()

   const dragStart: MouseEventHandler = (el) => {
      el.preventDefault()
   }
   const dragLeave: MouseEventHandler = (el) => {
      el.preventDefault()
   }
   const dragOver: MouseEventHandler = (el) => {
      el.preventDefault()
   }
   const drop: MouseEventHandler = (el) => {
      el.preventDefault();
      const dragStartEl = String(el.currentTarget.getAttribute('data-id'))
      setDragEl(dragStartEl)
   }

   return (
      <div>
         <div className={styles.orderDirection}>
            {
               gameOptions.direction == "ascending" ?
                  <p className={styles.orderAscending}>
                     <span className={styles.orderDirection__txt}>По возростанию</span>
                     <Image src={'/arrow-right.png'} alt={'По возростанию'} width={358} height={69} />
                  </p>
                  :
                  <p className={styles.orderDescending}>
                     <span className={styles.orderDirection__txt}>По убыванию</span>
                     <Image src={'/arrow-right.png'} alt={'По убыванию'} width={358} height={69} />
                  </p>
            }
         </div>
         <div className={styles.orderPanel}>

            <ul className={styles.panelItems}>
               {
                  order_items_sort.map((item, index) => {
                     return (
                        <li
                           className={styles.panelItem}
                           key={index}
                           draggable={true}
                           data-id={item.value}
                           onDragStart={dragStart}
                           onDragOver={dragOver}
                           onDragLeave={dragLeave}
                           //onDragEnd={dragEnd}
                           onDrop={drop}
                        >
                           {
                              item.ordered ? (
                                 <div className={styles.panelItem__ordered}>
                                    <Image src={'/' + item.img} alt={item.value + 'a'} width={130} height={130} className={styles.panelItem__img} />
                                    <span className={styles.panelItem__value}>{item.value}</span>
                                 </div>
                              )
                                 : null
                           }
                        </li>

                     )
                  })
               }
            </ul>
         </div >
      </div>
   )
}
