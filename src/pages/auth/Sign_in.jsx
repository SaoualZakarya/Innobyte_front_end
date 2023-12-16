import { CustomInput } from "../../components/CustomInput"
import { Link } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi";
import {useFormik} from 'formik'
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom'

let userSchema = Yup.object({
    email: Yup.string().required('email is required'),
    name: Yup.string().required('name is required'),
    password: Yup.string().required('password is required'),
    field:Yup.string().required("Input field is required")
});

export const Sign_in = () => {

    const navigate = useNavigate()


    const formik = useFormik({
        initialValues:  {
          email:'',
          password:'',
          name:'',
          field:'data science'
        },
        validationSchema: userSchema,
        onSubmit: () => {
          navigate('/user')
        },
    })


  return (
    <div className="container h-[90vb] gap-[100px] pt-10 flex justify-center ">
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
                <label htmlFor="name" className="font-semibold">User name</label>
                <CustomInput 
                    name='name' 
                    type='text'  
                    onChange={(e) => formik.handleChange('name')(e)} 
                    value={formik.values.name}
                />
                <div className='error'>
                    {formik.touched.name && formik.errors.name ? (
                    <div>{formik.errors.name}</div>
                    ) : null}
                </div>
                <label htmlFor="email" className="font-semibold">Email</label>
                <CustomInput 
                    name='email' 
                    type='text'  
                    onChange={(e) => formik.handleChange('email')(e)} 
                    value={formik.values.email}
                />
                <div className='error'>
                    {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                    ) : null}
                </div>
                <p className="text-[#757575] pb-4">We will never share your details.</p>
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
                <Link to={'/sign-in'} className="text-[#757575] block pb-4">forget password ?</Link>
                <label htmlFor="fields" className="block font-semibold">Choose your field</label>
                <select 
                    // value={formik.values.field}
                    className="my-2 block bg-white border-[#E5E7EB] border-2 outline-none px-4 py-1 rounded-xl border-solid h-10 w-[300px] md:w-[350px]" 
                    name="fields" 
                    id="fields"
                    onChange={(e) => { formik.handleChange('field')(e)}}
                >
                    <option value="data-science" selected>data-science</option>
                    <option value="computer-vision">computer-vision</option>
                    <option value="machine-learning">machine-learning</option>
                    <option value="data-analysis">data-analysis</option>
                    <option value="big-data">big-data</option>
                    <option value="Natural Language Processing (NLP)">Natural Language Processing (NLP)</option>
                </select>
                <div className='error'>
                    {formik.touched.field && formik.errors.field ? (
                    <div>{formik.errors.field}</div>
                    ) : null}
                </div>
                <button type="submit" className="text-white px-3 py-2 bg-[#3ADAD9] rounded-xl mt-3"  >create account</button>
            </form>
        </div>
        <div>
            <img src="/auth/login-img.png" className="hidden md:block w-full h-[100%]" alt="img" />
        </div>
    </div>
  )
}
