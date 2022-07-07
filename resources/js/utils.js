export const removeCartItem = (arr, ...args) => {
    if(Array.isArray(arr)){
        const {id} = args
        const deleted = arr.find(item => item.id == id)
        arr.splice(arr.indexOf(deleted), 1)
        localStorage.setItem('cart-items', JSON.stringify(arr))
    }
}