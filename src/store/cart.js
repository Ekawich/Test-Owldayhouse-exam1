import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalPrice: 0,
    shoppingCart: false,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find((item) => item.id === newItem.id)

            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({ ...newItem })
            }

            state.totalPrice += newItem.price

        },
        removeItem(state, action) {
            const itemId = action.payload
            const existingItemIndex = state.items.findIndex((item) => item.id === itemId)

            if (existingItemIndex !== -1) {
                const existingItem = state.items[existingItemIndex]
                state.totalPrice -= existingItem.price * existingItem.quantity
                state.items.splice(existingItemIndex, 1)
            }

        },
        quantityUpdate(state, action) {
            const { itemId, newQuantity } = action.payload
            console.log(itemId, newQuantity)
            const itemToUpdate = state.items.find(item => item.id === itemId)

            if (itemToUpdate && newQuantity > 0) {
                const quantityDiff = newQuantity - itemToUpdate.quantity;
                itemToUpdate.quantity = newQuantity
                state.totalPrice += itemToUpdate.price * quantityDiff
            }
        },
        toggleCart(state) {
            state.shoppingCart = !state.shoppingCart
        },
        cartLoading(state, action) {
            const savedCart = action.payload
            state.items = savedCart.items
            state.totalPrice = savedCart.totalPrice
            state.shoppingCart = savedCart.shoppingCart
        }
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer