import { useRef, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/Authcontext";

const AddBook = () => {
    const { token, categories, publishers } = useContext(AuthContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    console.log("categories",categories)
    const AddBook = async (event) => {
        let BookData = new FormData(event.target)
        event.preventDefault()
        console.log("BookData", BookData)
        setLoading(true)
        const response = await fetch(`${process.env.REACT_APP_API_URL}/books`,
            {
                method: "POST",
                body: BookData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        const json = await response.json();
        console.log(json)
        window.alert(json.messages)
        // alert(json.messages.join(' '))
        if (json.success) {
            navigate('/books')  
        }
    }
    
    return (
        <>
        <form method="post" onSubmit={AddBook}>
            <div className="cardAdd">
                <div id='register' className="my-5 p-5">
                    <div className=" d-flex justify-content-start align-items-between">
                        <div className='form-field mb-2 mx-2'>
                            <label htmlFor='name' className='mb-1'>Name:</label>
                            <input type='text' name="name" className='form-control' />
                        </div>
                        <div className='form-field mb-2 mx-2'>
                            <label htmlFor='pagesCount' className='mb-1'>Pages Count:</label>
                            <input type='number' name="pagesCount" className='form-control' />
                        </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-between">
                        <div className='form-field mb-2 mx-2'>
                            <label htmlFor='lang' className='mb-1'>Book language:</label>
                            <input type='text' name="lang" className='form-control' />
                        </div>
                        <div className='form-field mb-2 mx-2'>
                            <label htmlFor='author' className='mb-1'>Author Name:</label>
                            <input type='text' name="author" className='form-control' />
                        </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-between">
                        <div className='form-field mb-2 mx-2'>
                            <label htmlFor='publish' className='mb-1'>Publish Date:</label>
                            <input type='text' name="publish" className='form-control' placeholder="yyyy-mm-dd"/>
                        </div>
                        <div className='form-field mb-2 mx-2'>
                            <label htmlFor='ISBN' className='mb-1'>ISBN:</label>
                            <input type='text' name="ISBN" className='form-control' />
                        </div>
                    </div>
                    <div className='form-field mb-2'>
                        <label htmlFor='categoryId' className='mb-1 mx-2'>Category Name:</label>
                        <select name='categoryId' className="form-select" aria-label="Default select example">
                            <option selected>Select Category</option>
                            {
                                categories.map((category, i) => {
                                    console.log("category?.id",category?.id)
                                    return <option key={i} value={category?.id}>{category?.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className='form-field mb-2'>
                        <label htmlFor='publisherId' className='mb-1 mx-2'>Publisher Name:</label>
                        <select name='publisherId' className="form-select" aria-label="Default select example">
                            <option selected>Select Publisher</option>
                            {
                                publishers.map((publisher, i) => {
                                    console.log("publisher?.id",publisher?.id)
                                    return <option key={i} value={publisher?.id}>{publisher?.name}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-field mb-2 form-check mx-2">
                        <input className="form-check-input" type="checkbox" value={1} name="kindle" id="flexCheckDefault"/>
                        <label className="form-check-label mx-4" htmlFor="flexCheckDefault">
                        Kindle
                        </label>
                    </div>
                    <div className="form-field mb-2 form-check mx-2">
                        <input className="form-check-input" type="checkbox" name="paper" value={1} id="flexCheckDefault"/>
                        <label className="form-check-label mx-4" htmlFor="flexCheckDefault">
                        Paper
                        </label>
                    </div>
                    <div className='form-field mb-1 mx-2'>
                        <label htmlFor='dex' className='mb-1'>Description:</label>
                        <textarea name="des" id="password" className='form-control'>
                        </textarea>
                    </div>
                    <div className='form-field mb-1 mx-1'>
                        <label htmlFor='cover' className='mb-1'>Cover Photo:</label>
                        <input type='file' name="cover" className='form-control' />
                    </div>

                    <button className='btn btn-primary w-49' id='signup-bttn'>
                        {loading ? 'Please Wait' : 'Add'}
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}

export default AddBook