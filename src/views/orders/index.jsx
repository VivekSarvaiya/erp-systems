import { useDispatch, useSelector } from 'react-redux';
import Table from "antd/lib/table";
import Pill from '../../components/Pill';
import ViewOrders from './components/ViewOrders';
import getPillVarient from './utils/getPillVarient';
import CustomModal from '../../components/CustomModal';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import { changeOrderStatus, deleteOrder, setOrdersModal, setSelectedOrder } from '../../redux/slices/ordersSlice';

const Orders = () => {

   const { orders, isOrdersModalOpen, selectedOrder } = useSelector((state) => state.ordersReducer);

   const dispatch = useDispatch();

   const onOpenModal = (order) => {
      dispatch(setSelectedOrder(order));
      dispatch(setOrdersModal(true));
   }

   const onCloseModal = () => {
      dispatch(setSelectedOrder(null));
      dispatch(setOrdersModal(false));
   }

   const onStatusChange = (status) => {
      dispatch(changeOrderStatus(status))
   }

   const onDeleteOrder = (orderId) => {
      if (orderId === undefined || orderId === null) return
      dispatch(deleteOrder(orderId));
   }

   const OrderTableColumns = [
      {
         title: <p className="text-accent font-semibold">Order Id</p>,
         width: 100,
         dataIndex: "id",
         key: "id",
         align: "center",
         ellipsis: true,
         render: (text) => <span className="text-accentLight font-medium">{text}</span>,
      },
      {
         title: <p className="text-accent font-semibold">Customer name</p>,
         width: 100,
         dataIndex: "customer_name",
         key: "customer_name",
         align: "center",
         ellipsis: true,
         sorter: (a, b) => a?.customer_name?.localeCompare(b?.customer_name),
         render: (text) => <span className="text-accentLight font-medium">{text}</span>,
      },
      {
         title: <p className="text-accent font-semibold">Price ($)</p>,
         dataIndex: "total_price",
         key: "total_price",
         width: 100,
         align: "center",
         ellipsis: true,
         sorter: (a, b) => a.total_price - b.total_price,
         render: (text) => <span className="text-accentLight font-medium">{text}</span>,
      },
      {
         title: <p className="text-accent font-semibold">Status</p>,
         dataIndex: "status",
         key: "status",
         width: 100,
         align: "center",
         ellipsis: true,
         render: (text) => <div className='grid place-items-center'><Pill text={text} varient={getPillVarient(text)} /></div>,
      },
      {
         title: <p className="text-accent font-semibold"> Delivery Date</p>,
         dataIndex: "date",
         key: "date",
         width: 100,
         align: "center",
         ellipsis: true,
         render: (text, record) => {
            if (record.status === "Delivered" || record.status === "Cancelled") return "-";
            else return <span className="text-accentLight font-medium">{text}</span>
         },
      },
      {
         title: <p className="text-accent font-semibold">Actions</p>,
         dataIndex: "actions",
         key: "actions",
         width: 100,
         align: "center",
         ellipsis: true,
         render: (_, record) =>
            <div className="flex justify-center items-center gap-4">
               <EyeOutlined className='text-xl text-accentLight' onClick={() => onOpenModal(record)} />
               <DeleteOutlined className='text-xl text-accentLight' onClick={() => onDeleteOrder(record.id)} />
            </div>
      },
   ]

   return (
      <div className="mt-8 mb-8 flex flex-col gap-12">
         <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-dark to-gray-800 text-white shadow-gray-900/20 shadow-lg -mt-6 mb-8 p-6">
               <h6 className="flex justify-between items-center antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                  Orders List
               </h6>
            </div>
            <div className="p-6 px-0 pt-0 pb-2">
               <Table
                  className='w-full'
                  columns={OrderTableColumns}
                  dataSource={orders || []}
                  loading={orders === null}
                  rowKey="id"
                  scroll={{ x: 600 }}
                  pagination={{
                     pageSize: 10,
                     showSizeChanger: false,
                     position: ["bottomCenter"],
                  }}
               />
            </div>
         </div>

         <CustomModal
            closable={true}
            open={isOrdersModalOpen}
            onCancel={onCloseModal}
         >
            <ViewOrders order={selectedOrder} onStatusChange={onStatusChange} />
         </CustomModal>

      </div>
   )
};

export default Orders;
