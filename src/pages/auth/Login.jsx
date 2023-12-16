import {useFormik} from 'formik'
import { Link,useNavigate } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi";
import * as Yup from 'yup';
import { CustomInput } from "../../components/CustomInput"

let userSchema = Yup.object({
  email: Yup.string().required('email is required'),
  password: Yup.string().required('password is required'),
});

export const Login = () => {

  const formik = useFormik({
    initialValues:  {
      email:'',
      password:'',
    },
    validationSchema: userSchema,
    onSubmit: () => {
      navigate('/user')
    },
  })

  const navigate = useNavigate()

  return (
    <div className="container h-[90vb] gap-[100px] pt-10 flex justify-center">
        <div className="md:flex-none flex-1">
          <button onClick={()=>{navigate('/')}} className="-mx-6 flex items-center gap-2">
            <FiArrowLeft className=" w-4 h-4" />
            <div>Go back</div>
          </button>
              <h1 className="font-bold text-[26px] text-[#333333] py-1">Create an account for free</h1>
              <p className="text-[#757575] pb-4">Free forever. No payment needed.</p>
              <form
                action='POST'
                onSubmit={formik.handleSubmit}
              >
                <label htmlFor="email" className="font-semibold">Email</label>
                <CustomInput 
                    name='email' 
                    type='text'  
                    onChange={(e) => formik.handleChange('email')(e)} 
                    value={formik.values.name}
                />
                <div className='error'>
                    {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                    ) : null}
                </div>
                <label htmlFor="password" className="font-semibold">Password</label>
                <CustomInput 
                    name='password' 
                    type='password'  
                    onChange={(e) => formik.handleChange('password')(e)} 
                    value={formik.values.password}
                />
                <div className='error'>
                    {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                    ) : null}
                </div>
                <Link to={'/login'} className="text-[#757575] block pb-4">forget password ?</Link>
                <button type="submit" className="text-white px-3 py-2 bg-[#F3C658] rounded-xl mt-3"  >Login</button>
            </form>
        </div>
        <div>
          <img src="/auth/login.png" className="hidden md:block w-full h-[100%]" alt="img" />
        </div>
    </div>
  )
}
