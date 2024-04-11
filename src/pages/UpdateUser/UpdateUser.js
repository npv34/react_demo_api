import axios from "axios";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser(params) {
    // get id from params url;
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        // get current user update
        axios.get("https://6614deee2fc47b4cf27d4a3a.mockapi.io/api/v1/users/" + id)
        .then(response => {
            console.log(response);
            formEditUser.setValues({...response.data});
        })
    }, [])

    const formEditUser = useFormik({
        initialValues: {
            name: "",
            email: "",
            avatar: ""
        },
        onSubmit: (values) => {
            //call api create
            axios
            .put("https://6614deee2fc47b4cf27d4a3a.mockapi.io/api/v1/users/" + id,  {
                data: values
            }).then(response => {
                navigate("/home")
            })
        }
    })

    return (
        <>
        <form className="max-w-sm mx-auto" 
                    onSubmit={formEditUser.handleSubmit}>
                <div className="mb-5">
                    <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formEditUser.values.name}
                        onChange={formEditUser.handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required=""
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formEditUser.values.email}
                        onChange={formEditUser.handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="avatar"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Link avatar 
                    </label>
                    <input
                        type="text"
                        id="avatar"
                        name="avatar"
                        value={formEditUser.values.avatar}
                        onChange={formEditUser.handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                    />
                </div>
            
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
            
        </>
    )
}


export default UpdateUser;