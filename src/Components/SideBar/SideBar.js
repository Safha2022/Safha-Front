const Sidebar = () => {

    return (
        <>

            <div className="page-wrapper">
                <div className="top-notice p-0">
                    <div className="owl-carousel info-boxes-slider bg-primary" data-owl-options="{
                      'items': 1,
                      'dots': false,
                      'loop': false,
                      'responsive': {
                          '768': {
                              'items': 2
                          },
                          '992': {
                              'items': 3
                          }
                      }
                  }">
                        <div className="info-box info-box-icon-left">
                            <i className="icon-shipping" />
                            <div className="info-box-content">
                                <h4>Free Shipping on Orders Over $99</h4>
                            </div>{/* End .info-box-content */}
                        </div>{/* End .info-box */}
                        <div className="info-box info-box-icon-left">
                            <i className="icon-money" />
                            <div className="info-box-content">
                                <h4>Up to 40% OFF on Selected Items</h4>
                            </div>{/* End .info-box-content */}
                        </div>{/* End .info-box */}
                        <div className="info-box info-box-icon-left">
                            <i className="sicon-graduation" />
                            <div className="info-box-content">
                                <h4>15% OFF Student Discount</h4>
                            </div>{/* End .info-box-content */}
                        </div>{/* End .info-box */}
                    </div>{/* End .owl-carousel */}
                </div>
                <main>
                    <div className="bg-white">
                        <div className="container">
                            <div className="row main-content">
                                <div className="col-lg-9">
                                    <nav className="toolbox sticky-header" data-sticky-options="{'mobile': true}">
                                        <div className="toolbox-left">
                                            <a href="#" className="sidebar-toggle"><svg data-name="Layer 3" id="Layer_3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                                <line x1={15} x2={26} y1={9} y2={9} className="cls-1" />
                                                <line x1={6} x2={9} y1={9} y2={9} className="cls-1" />
                                                <line x1={23} x2={26} y1={16} y2={16} className="cls-1" />
                                                <line x1={6} x2={17} y1={16} y2={16} className="cls-1" />
                                                <line x1={17} x2={26} y1={23} y2={23} className="cls-1" />
                                                <line x1={6} x2={11} y1={23} y2={23} className="cls-1" />
                                                <path d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z" className="cls-2" />
                                                <path d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z" className="cls-2">
                                                </path>
                                                <path d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z" className="cls-3" />
                                                <path d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z" className="cls-2" />
                                            </svg>
                                                <span>Filter</span>
                                            </a>
                                            <div className="toolbox-item toolbox-sort">
                                                <label>Sort By:</label>
                                                <div className="select-custom">
                                                    <select name="orderby" className="form-control">
                                                        <option value="menu_order" selected="selected">Default sorting</option>
                                                        <option value="popularity">Sort by popularity</option>
                                                        <option value="rating">Sort by average rating</option>
                                                        <option value="date">Sort by newness</option>
                                                        <option value="price">Sort by price: low to high</option>
                                                        <option value="price-desc">Sort by price: high to low</option>
                                                    </select>
                                                </div>{/* End .select-custom */}
                                            </div>{/* End .toolbox-item */}
                                        </div>{/* End .toolbox-left */}
                                        <div className="toolbox-right">
                                            <div className="toolbox-item toolbox-show">
                                                <label>Show:</label>
                                                <div className="select-custom">
                                                    <select name="count" className="form-control">
                                                        <option value={12}>12</option>
                                                        <option value={24}>24</option>
                                                        <option value={36}>36</option>
                                                    </select>
                                                </div>{/* End .select-custom */}
                                            </div>{/* End .toolbox-item */}
                                            <div className="toolbox-item layout-modes">
                                                <a href="category.html" className="layout-btn btn-grid active" title="Grid">
                                                    <i className="icon-mode-grid" />
                                                </a>
                                                <a href="category-list.html" className="layout-btn btn-list" title="List">
                                                    <i className="icon-mode-list" />
                                                </a>
                                            </div>{/* End .layout-modes */}
                                        </div>{/* End .toolbox-right */}
                                    </nav>
                                    <div className="row">
                                        <div className="col-6 col-sm-4 col-lg-3">
                                            <div className="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo25-product.html">
                                                        <img src="assets/images/demoes/demo25/products/product-1.jpg" width={217} height={217} alt="product" />
                                                    </a>
                                                    <div className="label-group">
                                                        <div className="product-label label-hot">HOT</div>
                                                    </div>
                                                    <div className="btn-icon-group">
                                                        <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </figure>
                                                <div className="product-details">
                                                    <div className="category-wrap">
                                                        <div className="category-list">
                                                            <a href="demo25-shop.html" className="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="demo25-product.html">The Night Before</a>
                                                    </h3>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top" />
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="product-price">$299.0</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                        </div>{/* End .col-lg-3 */}
                                        <div className="col-6 col-sm-4 col-lg-3">
                                            <div className="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo25-product.html">
                                                        <img src="assets/images/demoes/demo25/products/product-3.jpg" width={217} height={217} alt="product" />
                                                    </a>
                                                    <div className="label-group">
                                                        <div className="product-label label-hot">HOT</div>
                                                    </div>
                                                    <div className="btn-icon-group">
                                                        <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </figure>
                                                <div className="product-details">
                                                    <div className="category-wrap">
                                                        <div className="category-list">
                                                            <a href="demo25-shop.html" className="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="demo25-product.html">Ask Again Yes</a>
                                                    </h3>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top" />
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="old-price">$299.0</span>
                                                        <span className="product-price">$259.0</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                        </div>{/* End .col-lg-3 */}
                                        <div className="col-6 col-sm-4 col-lg-3">
                                            <div className="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo25-product.html">
                                                        <img src="assets/images/demoes/demo25/products/product-2.jpg" width={217} height={217} alt="product" />
                                                    </a>
                                                    <div className="label-group">
                                                        <div className="product-label label-hot">HOT</div>
                                                    </div>
                                                    <div className="btn-icon-group">
                                                        <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </figure>
                                                <div className="product-details">
                                                    <div className="category-wrap">
                                                        <div className="category-list">
                                                            <a href="demo25-shop.html" className="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="demo25-product.html">Call an Audible</a>
                                                    </h3>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top" />
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="product-price">$299.0</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                        </div>{/* End .col-lg-3 */}
                                        <div className="col-6 col-sm-4 col-lg-3">
                                            <div className="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo25-product.html">
                                                        <img src="assets/images/demoes/demo25/products/product-6.jpg" width={217} height={217} alt="product" />
                                                    </a>
                                                    <div className="label-group">
                                                        <div className="product-label label-hot">HOT</div>
                                                    </div>
                                                    <div className="btn-icon-group">
                                                        <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </figure>
                                                <div className="product-details">
                                                    <div className="category-wrap">
                                                        <div className="category-list">
                                                            <a href="demo25-shop.html" className="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="demo25-product.html">Grey</a>
                                                    </h3>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top" />
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="product-price">$55.0</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                        </div>{/* End .col-lg-3 */}
                                        <div className="col-6 col-sm-4 col-lg-3">
                                            <div className="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo25-product.html">
                                                        <img src="assets/images/demoes/demo25/products/product-8.jpg" width={217} height={217} alt="product" />
                                                    </a>
                                                    <div className="label-group">
                                                        <div className="product-label label-sale">-35%</div>
                                                    </div>
                                                    <div className="btn-icon-group">
                                                        <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </figure>
                                                <div className="product-details">
                                                    <div className="category-wrap">
                                                        <div className="category-list">
                                                            <a href="demo25-shop.html" className="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="demo25-product.html">I'll Never Tell</a>
                                                    </h3>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top" />
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="old-price">$199.0</span>
                                                        <span className="product-price">$129.0</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                        </div>{/* End .col-lg-3 */}
                                        <div className="col-6 col-sm-4 col-lg-3">
                                            <div className="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo25-product.html">
                                                        <img src="assets/images/demoes/demo25/products/product-7.jpg" width={217} height={217} alt="product" />
                                                    </a>
                                                    <div className="label-group">
                                                        <div className="product-label label-sale">-35%</div>
                                                    </div>
                                                    <div className="btn-icon-group">
                                                        <a href="demo25-product.html" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </figure>
                                                <div className="product-details">
                                                    <div className="category-wrap">
                                                        <div className="category-list">
                                                            <a href="demo25-shop.html" className="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="demo25-product.html">On Earth We're Briefly Gorgeous</a>
                                                    </h3>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top" />
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="old-price">$199.0</span>
                                                        <span className="product-price">$129.0</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                        </div>{/* End .col-lg-3 */}
                                        <div className="col-6 col-sm-4 col-lg-3">
                                            <div className="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo25-product.html">
                                                        <img src="assets/images/demoes/demo25/products/product-10.jpg" width={217} height={217} alt="product" />
                                                    </a>
                                                    <div className="label-group">
                                                        <div className="product-label label-sale">-17%</div>
                                                    </div>
                                                    <div className="btn-icon-group">
                                                        <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </figure>
                                                <div className="product-details">
                                                    <div className="category-wrap">
                                                        <div className="category-list">
                                                            <a href="demo25-shop.html" className="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="demo25-product.html">Queen Bee</a>
                                                    </h3>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top" />
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="old-price">$59.0</span>
                                                        <span className="product-price">$49.0</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                        </div>{/* End .col-lg-3 */}
                                        <div className="col-6 col-sm-4 col-lg-3">
                                            <div className="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo25-product.html">
                                                        <img src="assets/images/demoes/demo25/products/product-5.jpg" width={217} height={217} alt="product" />
                                                    </a>
                                                    <div className="label-group">
                                                        <div className="product-label label-hot">HOT</div>
                                                    </div>
                                                    <div className="btn-icon-group">
                                                        <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </figure>
                                                <div className="product-details">
                                                    <div className="category-wrap">
                                                        <div className="category-list">
                                                            <a href="demo25-shop.html" className="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="demo25-product.html">Sorcery of Thorns</a>
                                                    </h3>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top" />
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="product-price">$599.0</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                        </div>{/* End .col-lg-3 */}
                                        <div className="col-6 col-sm-4 col-lg-3">
                                            <div className="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo25-product.html">
                                                        <img src="assets/images/demoes/demo25/products/product-9.jpg" width={217} height={217} alt="product" />
                                                    </a>
                                                    <div className="btn-icon-group">
                                                        <a href="demo25-product.html" className="btn-icon btn-add-cart product-type-simple"><i className="icon-shopping-cart" /></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </figure>
                                                <div className="product-details">
                                                    <div className="category-wrap">
                                                        <div className="category-list">
                                                            <a href="demo25-shop.html" className="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="demo25-product.html">The Bear and The Dragon</a>
                                                    </h3>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{ width: '0%' }} />{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top" />
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="product-price">$101.0 – $111.0</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                        </div>{/* End .col-lg-3 */}
                                        <div className="col-6 col-sm-4 col-lg-3">
                                            <div className="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo25-product.html">
                                                        <img src="assets/images/demoes/demo25/products/product-4.jpg" width={217} height={217} alt="product" />
                                                    </a>
                                                    <div className="label-group">
                                                        <div className="product-label label-hot">HOT</div>
                                                    </div>
                                                    <div className="btn-icon-group">
                                                        <a href="demo25-product.html" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </figure>
                                                <div className="product-details">
                                                    <div className="category-wrap">
                                                        <div className="category-list">
                                                            <a href="demo25-shop.html" className="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="demo25-product.html">The Butterfly Garden</a>
                                                    </h3>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{ width: '80%' }} />{/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top" />
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="product-price">$39.0</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                        </div>{/* End .col-lg-3 */}
                                        <div className="col-6 col-sm-4 col-lg-3">
                                            <div className="product-default inner-quickview inner-icon">
                                                <figure>
                                                    <a href="demo25-product.html">
                                                        <img src="assets/images/demoes/demo25/products/product-11.jpg" width={217} height={217} alt="product" />
                                                    </a>
                                                    <div className="btn-icon-group">
                                                        <a href="demo25-product.html" className="btn-icon btn-add-cart"><i className="fa fa-arrow-right" /></a>
                                                    </div>
                                                    <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick
                                                        View</a>
                                                </figure>
                                                <div className="product-details">
                                                    <div className="category-wrap">
                                                        <div className="category-list">
                                                            <a href="demo25-shop.html" className="product-category">category</a>
                                                        </div>
                                                        <a href="wishlist.html" className="btn-icon-wish"><i className="icon-heart" /></a>
                                                    </div>
                                                    <h3 className="product-title">
                                                        <a href="demo25-product.html">The Guest Book</a>
                                                    </h3>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{ width: '100%' }} />
                                                            {/* End .ratings */}
                                                            <span className="tooltiptext tooltip-top" />
                                                        </div>{/* End .product-ratings */}
                                                    </div>{/* End .product-container */}
                                                    <div className="price-box">
                                                        <span className="product-price">$101.0 – $108.0</span>
                                                    </div>{/* End .price-box */}
                                                </div>{/* End .product-details */}
                                            </div>
                                        </div>{/* End .col-lg-3 */}
                                    </div>{/* End .row */}
                                    <nav className="toolbox toolbox-pagination">
                                        <div className="toolbox-item toolbox-show">
                                            <label className="mt-0">Show:</label>
                                            <div className="select-custom">
                                                <select name="count" className="form-control">
                                                    <option value={12}>12</option>
                                                    <option value={24}>24</option>
                                                    <option value={36}>36</option>
                                                </select>
                                            </div>{/* End .select-custom */}
                                        </div>{/* End .toolbox-item */}
                                        <ul className="pagination toolbox-item">
                                            <li className="page-item disabled">
                                                <a className="page-link page-link-btn" href="#"><i className="icon-angle-left" /></a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><span className="page-link">...</span></li>
                                            <li className="page-item">
                                                <a className="page-link page-link-btn" href="#"><i className="icon-angle-right" /></a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>{/* End .col-lg-9 */}
                                <div className="sidebar-overlay" />
                                <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
                                    <div className="sidebar-wrapper">
                                        <div className="widget">
                                            <h3 className="widget-title">
                                                <a data-toggle="collapse" href="#widget-body-1" role="button" aria-expanded="true" aria-controls="widget-body-1">Categories</a>
                                            </h3>
                                            <div className="collapse show" id="widget-body-1">
                                                <div className="widget-body">
                                                    <ul className="cat-list">
                                                        <li><a href="#">Arts &amp; Photography<span className="products-count">(2)</span></a></li>
                                                        <li><a href="#">Business &amp; Investing<span className="products-count">(3)</span></a></li>
                                                        <li><a href="#">Literature &amp; Fiction<span className="products-count">(4)</span></a></li>
                                                        <li><a href="#">Mystery Suspense<span className="products-count">(4)</span></a></li>
                                                        <li><a href="#">Scifi Fantasy<span className="products-count">(3)</span></a>
                                                        </li>
                                                    </ul>
                                                </div>{/* End .widget-body */}
                                            </div>{/* End .collapse */}
                                        </div>{/* End .widget */}
                                        <div className="widget">
                                            <h3 className="widget-title">
                                                <a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Price</a>
                                            </h3>
                                            <div className="collapse show" id="widget-body-2">
                                                <div className="widget-body pb-0">
                                                    <form action="#">
                                                        <div className="price-slider-wrapper">
                                                            <div id="price-slider" />{/* End #price-slider */}
                                                        </div>{/* End .price-slider-wrapper */}
                                                        <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                                                            <div className="filter-price-text">
                                                                Price:
                                                                <span id="filter-price-range" />
                                                            </div>{/* End .filter-price-text */}
                                                            <button type="submit" className="btn btn-primary">Filter</button>
                                                        </div>{/* End .filter-price-action */}
                                                    </form>
                                                </div>{/* End .widget-body */}
                                            </div>{/* End .collapse */}
                                        </div>{/* End .widget */}
                                        <div className="widget widget-color">
                                            <h3 className="widget-title">
                                                <a data-toggle="collapse" href="#widget-body-3" role="button" aria-expanded="true" aria-controls="widget-body-3">Color</a>
                                            </h3>
                                            <div className="collapse show" id="widget-body-3">
                                                <div className="widget-body pb-0">
                                                    <ul className="config-swatch-list">
                                                        <li className="active">
                                                            <a href="#" style={{ backgroundColor: '#000' }}>Black</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" style={{ backgroundColor: '#0188cc' }}>Blue</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" style={{ backgroundColor: '#81d742' }}>Green</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" style={{ backgroundColor: '#eded65' }}>Yellow</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" style={{ backgroundColor: '#6085a5' }}>Indigo</a>
                                                        </li>
                                                        <li>
                                                            <a href="#" style={{ backgroundColor: '#ab6e6e' }}>Red</a>
                                                        </li>
                                                    </ul>
                                                </div>{/* End .widget-body */}
                                            </div>{/* End .collapse */}
                                        </div>{/* End .widget */}
                                        <div className="widget">
                                            <h3 className="widget-title">
                                                <a data-toggle="collapse" href="#widget-body-4" role="button" aria-expanded="true" aria-controls="widget-body-4">Sizes</a>
                                            </h3>
                                            <div className="collapse show" id="widget-body-4">
                                                <div className="widget-body">
                                                    <ul className="cat-list">
                                                        <li><a href="#">Extra Large</a></li>
                                                        <li><a href="#">Large</a></li>
                                                        <li><a href="#">Medium</a></li>
                                                        <li><a href="#">Small</a></li>
                                                    </ul>
                                                </div>{/* End .widget-body */}
                                            </div>{/* End .collapse */}
                                        </div>{/* End .widget */}
                                        <div className="widget widget-featured pb-0">
                                            <h3 className="widget-title">Featured Products</h3>
                                            <div className="widget-body">
                                                <div className="featured-col">
                                                    <div className="product-default left-details product-widget">
                                                        <figure>
                                                            <a href="demo25-product.html">
                                                                <img src="assets/images/demoes/demo25/products/small/product-1.jpg" width={75} height={75} alt="product" />
                                                            </a>
                                                        </figure>
                                                        <div className="product-details">
                                                            <h3 className="product-title">
                                                                <a href="demo25-product.html">The Night Before</a>
                                                            </h3>
                                                            <div className="ratings-container">
                                                                <div className="product-ratings">
                                                                    <span className="ratings" style={{ width: '80%' }} />
                                                                    {/* End .ratings */}
                                                                    <span className="tooltiptext tooltip-top" />
                                                                </div>{/* End .product-ratings */}
                                                            </div>{/* End .product-container */}
                                                            <div className="price-box">
                                                                <span className="product-price">$299.0</span>
                                                            </div>{/* End .price-box */}
                                                        </div>{/* End .product-details */}
                                                    </div>
                                                    <div className="product-default left-details product-widget">
                                                        <figure>
                                                            <a href="demo25-product.html">
                                                                <img src="assets/images/demoes/demo25/products/small/product-2.jpg" width={75} height={75} alt="product" />
                                                            </a>
                                                        </figure>
                                                        <div className="product-details">
                                                            <h3 className="product-title">
                                                                <a href="demo25-product.html">Call an Audible</a>
                                                            </h3>
                                                            <div className="ratings-container">
                                                                <div className="product-ratings">
                                                                    <span className="ratings" style={{ width: '0%' }} />
                                                                    {/* End .ratings */}
                                                                    <span className="tooltiptext tooltip-top" />
                                                                </div>{/* End .product-ratings */}
                                                            </div>{/* End .product-container */}
                                                            <div className="price-box">
                                                                <span className="product-price">$299.0</span>
                                                            </div>{/* End .price-box */}
                                                        </div>{/* End .product-details */}
                                                    </div>
                                                </div>{/* End .featured-col */}
                                            </div>{/* End .widget-body */}
                                        </div>{/* End .widget */}
                                    </div>{/* End .sidebar-wrapper */}
                                </aside>{/* End .col-lg-3 */}
                            </div>{/* End .row */}
                        </div>{/* End .container */}
                    </div>
                </main>{/* End .main */}
                <footer className="footer font2">
                    <div className="container">
                        <div className="footer-middle">
                            <div className="row">
                                <div className="col-lg-5 mb-1 mb-lg-0">
                                    <a href="demo25.html"><img src="assets/images/logo-black.png" alt="Logo" width={111} height={44} className="m-b-4" /></a>
                                    <div className="contact-widget">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar feugiat
                                            quam,
                                            vitae aliquam urna egestas nec. Phasellus sit amet consequat tortor.</p>
                                        <div className="row ls-0">
                                            <div className="col-md-2-5">
                                                <h6 className="text-uppercase mb-0">Questions?</h6>
                                                <h3 className="text-primary m-b-4">(123) 456-7890</h3>
                                            </div>
                                            <div className="col-md-3-5">
                                                <h6 className="text-uppercase mb-0">Payment Methods</h6>
                                                <img src="assets/images/demoes/demo25/payment.jpg" alt="payment methods" className="footer-payments m-b-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>{/* End .col-lg-5 */}
                                <div className="col-lg-2 col-sm-4">
                                    <div className="widget">
                                        <h4 className="widget-title">Account</h4>
                                        <ul className="links">
                                            <li><a href="dashboard.html">My Account</a></li>
                                            <li><a href="#">Track Your Order</a></li>
                                            <li><a href="#">Payment Methods</a></li>
                                            <li><a href="#">Shipping Guide</a></li>
                                            <li><a href="#">FAQs</a></li>
                                            <li><a href="#">Product Support</a></li>
                                            <li><a href="#">Privacy</a></li>
                                        </ul>
                                    </div>{/* End .widget */}
                                </div>{/* End .col-lg-2 */}
                                <div className="col-lg-3 col-sm-4">
                                    <div className="widget">
                                        <h4 className="widget-title">About</h4>
                                        <ul className="links">
                                            <li><a href="about.html">About Porto</a></li>
                                            <li><a href="#">Our Guarantees</a></li>
                                            <li><a href="#">Terms And Conditions</a></li>
                                            <li><a href="#">Privacy policy</a></li>
                                            <li><a href="#">Return Policy</a></li>
                                            <li><a href="#">Intellectual Property Claims</a></li>
                                            <li><a href="#">Site Map</a></li>
                                        </ul>
                                    </div>{/* End .widget */}
                                </div>{/* End .col-lg-3 */}
                                <div className="col-lg-2 col-sm-4">
                                    <div className="widget">
                                        <h4 className="widget-title">Features</h4>
                                        <ul className="links">
                                            <li><a href="#">Powerful Admin Panel</a></li>
                                            <li><a href="#">Mobile &amp; Retina Optimized</a></li>
                                            <li><a href="#">Super Fast HTML Template</a></li>
                                            <li><a href="#">1st Fully Working Ajax Theme</a></li>
                                            <li><a href="#">33 Unique Shop Demos</a></li>
                                        </ul>
                                    </div>{/* End .widget */}
                                </div>{/* End .col-lg-2 */}
                            </div>{/* End .row */}
                        </div>{/* End .footer-middle */}
                        <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap">
                            <p className="footer-copyright py-3 pr-4 mb-0">© Porto eCommerce. 2021. All Rights Reserved</p>
                            <div className="social-icons py-3">
                                <a href="#" className="social-icon social-facebook icon-facebook" target="_blank" title="Facebook" />
                                <a href="#" className="social-icon social-twitter icon-twitter" target="_blank" title="Twitter" />
                                <a href="#" className="social-icon social-linkedin fab fa-linkedin-in" target="_blank" title="Linkedin" />
                            </div>{/* End .social-icons */}
                        </div>{/* End .footer-bottom */}
                    </div>{/* End .container */}
                </footer>{/* End .footer */}
            </div>{/* End .page-wrapper */}
        </>
    )


}

export default Sidebar;