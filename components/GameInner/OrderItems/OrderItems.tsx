import { OrderItem } from "./OrderItem/OrderItem";
import { useGlobalContext } from '../../GlobalContext.tsx/GlobalContext';
//import { orderItem } from "../../../pages";
import styles from "./OrderItems.module.scss";
import { DragEventHandler, EffectCallback, useContext } from "react";
import { orderItem } from "../../GlobalContext.tsx/GlobalContext";
interface OrderItemsProps {
   /*orderItems: orderItem[],
   dragStart: DragEventHandler,
   dragEnd: DragEventHandler,
   dragLeave: DragEventHandler,
   dragOver: DragEventHandler,
   drop: DragEventHandler,*/
}

export const OrderItems: React.FC<OrderItemsProps> = ({ }) => {
   const { order_items } = useGlobalContext()
   console.log(order_items)

   return (
      <ul className={styles.list + ' ' + styles.orderItems} >
         {
            order_items.map((item: orderItem, index: number) => {
               return <OrderItem
                  orderItem={item}
                  key={index}
               />
            })

         }

      </ul>
   )
}
