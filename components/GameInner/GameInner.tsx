import { OrderItems } from './OrderItems/OrderItems';
import { OrderPanel } from './OrderPanel/OrderPanel';
import styles from './GameInner.module.scss';
import { useGlobalContext } from '../../pages/GlobalContext';

export const GameInner: React.FC = () => {
   const { order_items_sort } = useGlobalContext()
   return (
      <main className={styles.main}>
         <div className={styles.game__inner}>
            <OrderItems />
            <OrderPanel
               panelItems={order_items_sort}
            />
         </div>

      </main>
   )
}