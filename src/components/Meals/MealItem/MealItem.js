import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cart-slice';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const dispatch = useDispatch();

  const price = `$${props.price}`;

  const addToCartHandler = (amount) => {
    dispatch(cartActions.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    }));
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} availability={props.availability} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;