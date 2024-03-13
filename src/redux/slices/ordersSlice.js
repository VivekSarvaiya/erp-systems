import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   orders: null,
   isOrdersModalOpen: false,
   selectedOrder: null,
}

const ordersSlice = createSlice({
   name: 'ordersSlice',
   initialState,
   reducers: {
      setOrders: (state, action) => {
         state.orders = action.payload;
      },
      setOrdersModal: (state, action) => {
         state.isOrdersModalOpen = action.payload;
      },
      setSelectedOrder: (state, action) => {
         state.selectedOrder = action.payload;
      },
      changeOrderStatus: (state, action) => {
         const status = action.payload;
         let orderToUpdate = state.orders.find((order) => order.id === state.selectedOrder.id);
         orderToUpdate.status = status;
         state.selectedOrder.status = status;
      },
      deleteOrder: (state, action) => {
         const orderId = action.payload;
         let updatedOrders = [...state.orders];
         updatedOrders = updatedOrders.filter((order) => order.id !== orderId)
         state.orders = updatedOrders;
      }
   }
})

export default ordersSlice.reducer;

export const {
   setOrders,
   setOrdersModal,
   setSelectedOrder,
   changeOrderStatus,
   deleteOrder,
} = ordersSlice.actions;