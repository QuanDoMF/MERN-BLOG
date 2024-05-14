
import { Label, TextInput, Button, Alert, Spinner } from "flowbite-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
const SignIn = () => {

    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(null)

    const navigate = useNavigate()
    const handleChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value.trim()
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!formData.email || !formData.password) {
            return setErrorMessage('Please fill out all fields')
        }
        try {
            setLoading(true)
            setErrorMessage(null)
            const response = await fetch('/api/auth/signin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (data.success === false) {
                setErrorMessage(data.message)
            }
            setLoading(false)
            if (data.success === true) {
                navigate('/')
            }
        }
        catch (error) {
            setErrorMessage(data.message)
            setLoading(false)
        }
    }
    return (
        <div className="min-h-screen mt-20 ">
            <div className="flex p-3 max-w-4xl mx-auto flex-col md:flex-row
                 md:items-center gap-5">
                {/* left */}
                <div className="flex-1">
                    <Link to='/' className='font-bold dark:text-white text-4xl'>
                        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500
                     via-purple-500 to-pink-500 rounded-lg text-white">
                            IT's
                        </span>
                        BLOG
                    </Link>
                    <p className="text-sm mt-5">
                        This is a demo project. You can sign in with your email and
                        password
                        or with Google
                    </p>
                </div>
                {/* right */}
                <div className="flex-1">
                    <form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <Label value="Your email" htmlFor="email">
                            </Label>
                            <TextInput
                                type="text"
                                placeholder="name@gmail.com"
                                id="email"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label value="Your password" htmlFor="password">
                            </Label>
                            <TextInput
                                type="password"
                                placeholder="**********"
                                id="password"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <Button gradientDuoTone='purpleToPink' type="submit" onClick={handleSubmit} disabled={loading}>
                            {
                                loading ? (
                                    <>
                                        <Spinner size='sm'>

                                        </Spinner>
                                        <span className="pl-3">Loading...</span>
                                    </>
                                ) : 'Sign In'
                            }
                        </Button>
                        <div className=" flex gap-2 text-sm mt-5">
                            <span>
                                Dont Have an account?
                            </span>
                            <Link to='/sign-up' className="text-blue-500">
                                Sign In
                            </Link>
                        </div>
                        {
                            errorMessage && (
                                <Alert className="mt-5" color='failure'>
                                    {errorMessage}
                                </Alert>
                            )

                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn;