import * as yup from 'yup'

const formSchema = yup.object().shape({
    fullName: yup
        .string()
        .trim()
        .required('Full Name is required')
        .min(3, 'Full Name must be at least 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is Required')
        .min(8, 'Password must be at least 5 characters'),
    occupation: yup
        .string()
        .required('Occupation is required'),
    state: yup
        .string()
        .required('State is required')
})

export default formSchema