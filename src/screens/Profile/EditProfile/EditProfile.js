import { useRef, useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/Authcontext";
import '../AddProfile/AddProfile.css'

const EditProfile = () => {
    const { token } = useContext(AuthContext)
    useEffect(() => {

    }, [])
    const navigate = useNavigate()
    const accountRef = useRef();
    const id = useParams()
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false)
    
    const EditUserInfo = async (event) => {
        let UserInfoData = new FormData(event.target)
        event.preventDefault()
        // console.log("UserInfoData", UserInfoData)
        setLoading(true)
        const response = await fetch(`${process.env.REACT_APP_API_URL}/userInfos/edit/1`,
            {
                method: "PUT",
                body: UserInfoData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        const json = await response.json();
        // console.log(json)
        // window.alert(json.messages)
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/profile')
        }
    }
    
    
    return (
        <>
        <form method="post" onSubmit={EditUserInfo}>
            <div class="cardAdd">
                <div id='register' className="my-5 p-5">
                    {/* <h2 id='title' className='mb-1'>Welcom to Safha</h2> */}
                    <div className='form-field mb-2'>
                        <label htmlFor='nickname' className='mb-1'>Nickname:</label>
                        <input type='text' name="nickname" id="email" className='form-control' />
                    </div>
                    <div className='form-field mb-1'>
                        <label htmlFor='dex' className='mb-1'>Description:</label>
                        <textarea name="des" id="password" className='form-control'>
                        </textarea>
                    </div>
                    <div className='form-field mb-1'>
                        <label htmlFor='avatar' className='mb-1'>Avatar:</label>
                        <input type='file' name="avatar" className='form-control' />
                    </div>
                    <div className='form-field mb-1'>
                        <label htmlFor='bgPic' className='mb-1'>Background Picture:</label>
                        <input type='file' name="bgPic" className='form-control' />
                    </div>
                    <button className='btn btn-primary w-49' id='signup-bttn'>
                        {loading ? 'Please Wait' : 'Edit'}
                    </button>
                </div>
            </div>
        </form>
        </>
    )
}

export default EditProfile