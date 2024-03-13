import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TOKEN, setLocalStorageItem } from "../../utils/localStorageManager";


const LoginSchema = Yup.object().shape({
   username: Yup.string().required('Username is required'),
   password: Yup.string().required('Password is required')
});


const Login = () => {
   const navigate = useNavigate();

   const initialValues = {
      username: 'user',
      password: '123456',
   }

   const onSubmitHandler = (values) => {
      setLocalStorageItem(TOKEN, "admin");
      navigate("/");
   }


   return (
      <div className="w-screen h-screen flex justify-center items-center p-2 bg-bgPrimary">
         {/* <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={onSubmitHandler}
         >
            {() => (
               <Form className="w-full sm:w-[320px] sm:max-w-[320px]">
                  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                     <div className="w-full bg-dark rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                           <p className="text-xl font-bold text-center text-white md:text-2xl">
                              Sign In
                           </p>
                           <div>
                              <label className="block mb-2 text-sm font-medium text-white">
                                 Username
                              </label>
                              <Field
                                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                                 placeholder="user"
                                 type="text"
                                 name="username"
                                 id="username"
                              />
                              <ErrorMessage name="username" component="div" className=" text-sm text-red-400" />
                           </div>
                           <div>
                              <label className="block mb-2 text-sm font-medium text-white">
                                 Password
                              </label>
                              <Field
                                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 outline-none"
                                 placeholder="••••••••"
                                 type="password"
                                 name="password"
                                 id="password"
                              />
                              <ErrorMessage name="password" component="div" className=" text-sm text-red-400" />
                           </div>
                           <button type="submit" className="w-full text-gray-900 bg-white hover:bg-gray-200 border focus:ring-1 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                              Sign in
                           </button>

                        </div>
                     </div>
                  </div>
               </Form>
            )}
         </Formik> */}

         <div className="max-w-md bg-white p-8 text-gray-800 flex flex-col gap-5 rounded-lg shadow-md">
            <div className="text-center font-semibold text-lg">Sign In</div>
            <Formik
               enableReinitialize={true}
               initialValues={initialValues}
               validationSchema={LoginSchema}
               onSubmit={onSubmitHandler}
            >
               {() => (
                  <Form className="flex flex-col gap-4">
                     <div className="flex flex-col gap-1">
                        <label htmlFor="username">Username</label>
                        <Field
                           className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                           placeholder="user"
                           type="text"
                           name="username"
                           id="username"
                        />
                        <ErrorMessage name="username" component="div" className=" text-sm text-red-400" />
                     </div>
                     <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <Field
                           className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                           placeholder="••••••••"
                           type="password"
                           name="password"
                           id="password"
                        />
                        <ErrorMessage name="password" component="div" className=" text-sm text-red-400" />
                     </div>
                     <button type="submit" className="bg-gray-800 text-white py-3 rounded-md shadow-md transition duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:bg-gray-700">Sign in</button>
                  </Form>
               )}
            </Formik>
         </div>
      </div>

   )
};


export default Login;
