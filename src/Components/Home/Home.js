import { useContext, useEffect } from "react";
import { AuthContext } from '../../contexts/Authcontext';
import Featured from "../Featured/Featured";
import HeroSection from "../HeroSection/HeroSection";
import HomeCategories from "../HomeCategories/HomeCategories2";
// import Sidebar from "../SideBar/SideBar";
import Suggested from "../SuggestedCategories/Suggested";
import EmblaCarousel from "../ScrolledSection/EmblaCarousel";




const Home = () => {
    // const { token, setUserInfo, userInfo } = useContext(AuthContext)
    // console.log("before getUserInfo token",token);
    // useEffect(()=>{
    //     const getUserInfo = async () => {
    //         const userInfoFetch = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
    //             method: 'get',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`,
    //             }
    //         })
    //         const json = await userInfoFetch.json()
    //         console.log("user info",json)
    //         if (json?.success) {
    //             console.log("insied if user info",json)
    //             setUserInfo(json?.data)
    //         }
    //     }
    //     getUserInfo()
    // },[])
    
    return (
        <>
            <HeroSection />
            <EmblaCarousel />
            <HomeCategories />
            <Featured />
            {/* <Sidebar/> */}
            <Suggested />
            {/* <SingleBook/> */}
        </>
    )
}
export default Home;