import { connect, useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { Component } from "react";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => dispatch(counterActions.increment(1))}>
          Increment
        </button>
        <button onClick={() => dispatch(counterActions.decrement(1))}>
          Decrement
        </button>
      </div>
      <button onClick={() => dispatch(counterActions.toggleCounter())}>
        Toggle Counter
      </button>
    </main>
  );
};
export default Counter;

/* Class based components - Working with State and Actions */
/*
class Counter extends Component {
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={() => this.props.increment()}>Increment</button>
          <button onClick={() => this.props.decrement()}>Decrement</button>
        </div>
        <button onClick={()=>{}}>Toggle Counter</button>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return { counter: state.counter };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
*/
