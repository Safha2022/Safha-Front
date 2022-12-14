// import Sidebar from "../SideBar/SideBar";
import { useEffect, useState } from "react";
import FavoriteBooks from "../SideBar/FavoriteBooks";

const SideBarWrapper = ({book}) => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const getBooks = async () => {
            const booksList = await fetch(`${process.env.REACT_APP_API_URL}/books/all`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await booksList.json()
            console.log("json books",json.data)
            if (json?.success) {
                setBooks(json?.data)
            }
        }
        getBooks()
    }, [])
    return (
        <>
                <aside className="sidebar-product col-lg mobile-sidebar">
                    <div classname="sidebar-wrapper">
                        <div className="widget widget-info">
                            <h3 className="widget-title m-b-3">AUTHOR</h3>
                            <div className="widget-body bg-gray">
                                <h4 className="font2 text-dark line-height-1 m-b-1">{book?.author}</h4>
                                <p className="font2 font-weight-normal line-height-1 ls-0 text-uppercase"></p>
                                {/* <a href="#" className="d-inline-block text-uppercase">View All
                                    Books</a> */}
                                <a href="#" className="d-inline-block text-uppercase"></a>
                            </div>
                        </div>
                    </div>
                    {/* <Sidebar/> */}

                    <div className="sidebar-wrapper">
                        <div className="widget widget-featured pb-0">
                            <h3 className="widget-title">Books</h3>
                            {
                                books.map((book, i) => {
                                    // console.log(i)
                                    if (i < 2) {
                                        return (<FavoriteBooks book={book} />)
                                    }
                                })
                            }

                        </div>{/* End .widget */}
                    </div>{/* End .sidebar-wrapper */}

                </aside>

        </>
    )
}
export default SideBarWrapper;