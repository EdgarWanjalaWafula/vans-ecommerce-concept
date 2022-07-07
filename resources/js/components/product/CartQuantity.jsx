import { useReducer } from "react";
const initialState = { count: 12, min: 0 };

function quantity(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count == 0 ? state.count = 0 : state.count - 1 };
        default:
            throw new Error();
    }
}

const CartQuantity = () => {
    const [state, dispatch] = useReducer(quantity, initialState);

    return (
        <>
            <div className="theme-cart-qty d-flex align-items-center">
                <input className="form-control rounded-0 border-0 text-center" type="number" value={state.count} />
                <div>
                    <span onClick={() => dispatch({ type: 'increment' })}><i className="bi bi-plus"></i></span>
                    <span onClick={() => dispatch({ type: 'decrement' })}><i className="bi bi-dash"></i></span>
                </div>
            </div>
        </>
    )
}

export default CartQuantity
