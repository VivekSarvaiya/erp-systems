import { useDispatch, useSelector } from "react-redux";
import Table from "antd/lib/table";

import CustomModal from "../../components/CustomModal";
import ProductForm from "./components/ProductForm";
import ViewProduct from "./components/ViewProduct";
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EditOutlined from '@ant-design/icons/EditOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import PlusCircleOutlined from '@ant-design/icons/PlusCircleOutlined';
import { addProduct, deleteProduct, editProduct, setProductModalChild, setProductsModal, setSelectedProduct } from "../../redux/slices/productsSlice";

const Products = () => {
   const { products, isProductsModalOpen, productModalChild, selectedProduct } = useSelector((state) => state.productsReducer);

   const dispatch = useDispatch();

   const onOpenModal = (modalChild, product) => {
      dispatch(setProductModalChild(modalChild));
      dispatch(setSelectedProduct(product));
      dispatch(setProductsModal(true));
   }

   const onCloseModal = () => {
      dispatch(setSelectedProduct(null));
      dispatch(setProductsModal(false));
   }

   const onAddProduct = (newProduct) => {
      dispatch(addProduct(newProduct));
      onCloseModal();
   }

   const onEditProduct = (updatedProduct) => {
      dispatch(editProduct(updatedProduct));
      onCloseModal();
   }

   const onDeleteProduct = (productId) => {
      if (productId === undefined || productId === null) return
      dispatch(deleteProduct(productId));
      onCloseModal();
   }

   const productModalChildren = {
      viewProduct: <ViewProduct
         product={selectedProduct}
         onEdit={() => onOpenModal("editProduct", selectedProduct)}
         onDelete={(productId) => onDeleteProduct(productId)}
      />,
      addProduct: <ProductForm onSubmit={onAddProduct} />,
      editProduct: <ProductForm product={selectedProduct} onSubmit={onEditProduct} />,
   }

   const ProductTableColumns = [
      {
         title: <p className="text-accent font-semibold">Image</p>,
         width: 100,
         dataIndex: "title",
         key: "title",
         align: "center",
         ellipsis: true,
         render: (_, record) => (
            <div className="w-full grid place-items-center">
               <img
                  className="w-full sm:w-[115px] sm:h-[115px] object-cover"
                  src={record.thumbnail}
                  alt={record.title}
               />
            </div>
         ),
      },
      {
         title: <p className="text-accent font-semibold">Title</p>,
         width: 150,
         dataIndex: "title",
         key: "title",
         align: "left",
         ellipsis: true,
         render: (_, record) => (
            <span>
               <p className="text-black font-semibold">{record.title}</p>
               <span className="text-accentLight text-sm font-semibold">{record.description}</span>
            </span>
         ),
      },
      {
         title: <p className="text-accent font-semibold">Brand</p>,
         width: 100,
         dataIndex: "brand",
         key: "brand",
         align: "center",
         ellipsis: true,
         sorter: (a, b) => a?.brand?.localeCompare(b?.brand),
         render: (text) => <span className="text-accentLight font-medium">{text}</span>,
      },
      {
         title: <p className="text-accent font-semibold">Category</p>,
         width: 100,
         dataIndex: "category",
         key: "category",
         align: "center",
         ellipsis: true,
         sorter: (a, b) => a?.category?.localeCompare(b?.category),
         render: (text) => <span className="text-accentLight font-medium capitalize">{text}</span>,
      },
      {
         title: <p className="text-accent font-semibold">Price ($)</p>,
         dataIndex: "price",
         key: "price",
         width: 100,
         align: "center",
         ellipsis: true,
         sorter: (a, b) => a.price - b.price,
         render: (text) => <span className="text-accentLight font-medium">{text}</span>,
      },
      {
         title: <p className="text-accent font-semibold">Stock</p>,
         dataIndex: "stock",
         key: "stock",
         width: 80,
         align: "center",
         ellipsis: true,
         render: (text) => <span className="text-accentLight font-medium">{text}</span>,
      },
      {
         title: <p className="text-accent font-semibold">Actions</p>,
         dataIndex: "actions",
         key: "actions",
         width: 100,
         align: "center",
         ellipsis: true,
         render: (_, record) =>
            <>
               <div className="flex justify-center items-center gap-4">
                  <EyeOutlined className='text-xl text-accentLight' onClick={() => onOpenModal("viewProduct", record)} />

                  <EditOutlined className='text-xl text-accentLight' onClick={() => onOpenModal("editProduct", record)} />

                  <DeleteOutlined className='text-xl text-accentLight' onClick={() => onDeleteProduct(record.id)} />

               </div>
            </>
      },
   ]

   return (
      <div className="mt-8 mb-8 flex flex-col gap-12">
         <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-dark to-gray-800 text-white shadow-gray-900/20 shadow-lg -mt-6 mb-8 p-6">
               <h6 className="flex justify-between items-center antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
                  <span>Products List</span>

                  <button className="text-dark bg-white border  hover:bg-gray-100  font-medium rounded-lg px-3 py-1 space-x-1"
                     onClick={() => onOpenModal("addProduct", null)}
                  >
                     <span> Add</span>
                     <PlusCircleOutlined className="text-lg" />
                  </button>

               </h6>
            </div>
            <div className="p-6 px-0 pt-0 pb-2">
               <Table
                  className='w-full'
                  columns={ProductTableColumns}
                  dataSource={products || []}
                  loading={products === null}
                  rowKey="id"
                  scroll={{ x: 500 }}
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
            open={isProductsModalOpen}
            onCancel={onCloseModal}
         >
            {productModalChildren[productModalChild]}
         </CustomModal>

      </div>
   );
};

export default Products;
