import React from 'react';
import { Link } from 'react-router-dom';
import "./basicDetail.css";

const BasicDetail = () => {
    return (
        <div className='shadow container'  >
            <div className='blurBG '>
                <div className='d-flex flex-column justify-content-center align-items-center' 
                style={{backgroundColor:"rgba(25, 25, 25, 0.5)"}}>
                    <img className="m-2" src='https://images.deliveryhero.io/image/talabat/restaurants/n5nk_sqp.jpg?v=20150422113056?width=180' />
                    <h4 className="orango m-2">Cairo Kitchen</h4>
                    <div className="text-light m-2">Egyptian, Grills, Kebab</div>
                    <h2 className="text-light m-2">Select your area to see the restaurant menu</h2>
                    <div className='row'>
                        <input className='col-8 px-3 m-1' size={65} placeholder='Search for area , street name ,landmark...' />
                        {/* <i class="fa-solid fa-location-dot"></i>  <i class="fa-solid fa-location-crosshairs"></i> */}
                     <Link to='/AddToCard' className="col-3 m-1"> <button className=" btn btn-success" > SHOW MENU  </button></Link>  
                    </div>  
                    <div className='row '>

                        <div className="col-md-4 col-12">
                            <span className=' bg-secondary'>4.0</span>
                            <span className='  text-light'>( 4372 Ratings )</span>
                           
                                <i className=" fa-solid fa-star" style={{color:"#ff5a00"}}></i>
                                <i className="  fa-solid fa-star" style={{color:"#ff5a00"}}></i>
                                <i className="  fa-solid fa-star" style={{color:"#ff5a00"}}></i>

                                <i className="fa-solid fa-star" style={{color:"#ff5a00"}}></i>
                                <i className=" fa-solid fa-star" style={{color:"gray"}}></i>

                           

                        </div>
                        <div className=" col-md-4 col-12">
                        <i className="fa-solid fa-comments px-1" style={{color:"white"}}></i>
                            <span className='text-light'>944 Reviews</span>
                        </div>

                        <div className="row col-md-4 col-12">
                            <img className="col-2  " style={{width:"3rem" ,height:"2rem"}} src='https://www.talabat.com/assets/images/visa_blue.png'></img>
                            <img className="col-2 " style={{width:"3rem" ,height:"2rem"}} src='https://www.talabat.com/assets/images/logo-mastercard.svg'></img>

                            <img className="col-2  " style={{width:"3rem" ,height:"2rem"}} src='https://www.talabat.com/assets/images/logo-cash.svg'></img>

                        </div>

                        
                    </div>            
                </div>
                
                
            
            </div> 
            {/*  */}

            <div className="shadow-lg  bg-light" style={{position:"relative" , top:"-2rem" ,width:"95%" ,margin:"auto"}}>
                <div style={{backgroundColor:"#ff5a00" , height:"0.4rem"}}></div>

               <div className='p-4'>
               <div className='row  justify-content-between'>
                    
                    <h2 className="col-9 orango">Cairo Kitchen delivers to you</h2>
                   
                   <div className="col-2 ">
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                   </div>

                </div>

                <div className='my-2' style={{ fontSize:"85%"}}>Cairo Kitchen is a restaurant located in Egypt, serving a selection of Egyptian, Grills, Kebab that delivers across Al Manial, Downtown - Abdin, Downtown - Abu El Rish, Downtown - Ahmed Helmy and Downtown - Ahmed Maher.</div>
                <div className='my-2'  style={{ fontSize:"85%"}}>Thier best selling dishes are Cheese Sambousek, Shish Tawook, Yogurt With Cucumbers and Sesame Paste Salad, although they have a variety of dishes and meals to choose from like Egyptian, Grills, Kebab.</div>
                <div className='my-2'  style={{ fontSize:"85%"}}>They have been reviewed 4372 times by talabat users, with a rating of 4.</div>
            
               </div>
            </div>

            
<div>
            <h5 className='m-2 pb-4'>Best Seller Dishes</h5>
            <div className='row  justify-content-around '>
                <div className='col-2'>
                    <img style={{ width:"12rem" ,height:"10rem"}} src='https://images.deliveryhero.io/image/talabat/MenuItems/%D8%B4%D9%88%D8%B1%D8%A8%D8%A9_%D9%84%D8%B3%D8%A7%D9%86_%D8%B9%D8%B5%D9%81%D9%88%D8%B1_637117527582538199.jpg'/>
                    <div> From Soups:</div> 
                    <div> Orzo Soup</div> 
                </div>

                <div className='col-2 m-1'>
                    <img style={{width:"12rem" ,height:"10rem"}} src='https://images.deliveryhero.io/image/talabat/MenuItems/241241659_1481713017_ma.jpg'/>
                    <div> From Grills:</div> 
                    <div> Shish Tawook</div> 
                </div>

                <div className='col-2 m-1'>
                    <img style={{width:"12rem" ,height:"10rem"}} src='
                    https://images.deliveryhero.io/image/talabat/MenuItems/Yogurt_Salad_637117527623621163.jpg'/>
                    <div> From Salads:</div> 
                    <div> Yogurt With Cucumbers</div> 
                </div>

                <div className='col-2 m-1'>
                    <img style={{width:"12rem" ,height:"10rem"}} src='
                    https://images.deliveryhero.io/image/talabat/MenuItems/Sesame_Paste_Salad_637117527643788801.jpg'/>
                    <div> From Salads:</div> 
                    <div>Sesame Paste Salad</div> 
                </div>


            </div>
            <div style={{height:"0.1rem" , backgroundColor:"rgb(219, 217, 217)"}}></div>
</div>
<div className='row justify-content-between m-2'>
    <h5 className='col-4 '>Cairo Kitchen Reviews (944) </h5>

    <div className=" col-6 d-flex col-md-4 col-12 mb-2">
        <div className='text-light'>( 4372 Ratings )</div>
        <div className='row mb-2' >
            <span className="col-1 px-2">4.0</span>
            <i className="col-1 fa-solid fa-star" style={{color:"#ff5a00"}}></i>
            <i className="col-1  fa-solid fa-star" style={{color:"#ff5a00"}}></i>
            <i className=" col-1  fa-solid fa-star" style={{color:"#ff5a00"}}></i>

            <i className="col-1  fa-solid fa-star" style={{color:"#ff5a00"}}></i>
            <i className="col-1 fa-solid fa-star" style={{color:"gray"}}></i>

        </div>

    </div>

    <div className='row justify-content-center m-2'>
        <div className='col-3  border-right'>
            <img style={{wigth:"1rem"}} src='https://www.talabat.com/assets/images/rating_very_good.svg'/>
            <span>Very good</span>
            <div>Order Packaging</div>
        </div>
        <div className='col-3 border-right'>
            <img style={{wigth:"1rem"}} src='https://www.talabat.com/assets/images/rating_very_good.svg'/>
            <span>Very good</span>
            <div>Order Packaging</div>
        </div>
        <div className='col-3 border-right'>
            <img style={{wigth:"1rem"}} src='https://www.talabat.com/assets/images/rating_very_good.svg'/>
            <span>Very good</span>
            <div>Order Packaging</div>
        </div>
        <div className='col-3 border-right'>
            <img style={{wigth:"1rem"}} src='https://www.talabat.com/assets/images/rating_very_good.svg'/>
            <span>Very good</span>
            <div>Order Packaging</div>
        </div>
    </div>

    <div className='border border-secondary p-3 m-2'
    style={{backgroundColor:"rgb(230, 230, 230)"}}>
        <img className='px-1'  style={{wigth:"1rem"}} src='https://www.talabat.com/assets/images/rating_very_good.svg'/>
        <span className='px-1'  style={{color:"gray"}}>Amazing</span>
        <span className='px-4'  style={{color:"gray"}}>Ahmed H***</span>
        <div className='py-2'  style={{color:"gray"}}>????????</div>


    </div>

    <div className='border border-secondary p-3 m-2'
    style={{backgroundColor:"rgb(230, 230, 230)"}}>
        <img className='px-1'  style={{wigth:"1rem"}} src='https://www.talabat.com/assets/images/rating_very_good.svg'/>
        <span className='px-1'  style={{color:"gray"}}>Amazing</span>
        <span className='px-4'  style={{color:"gray"}}>Tahani A***</span>
        <div className='py-2' style={{color:"gray"}}>???????????? ?????? ????????</div>

</div>

    <div className='border border-secondary p-3 m-2'
    style={{backgroundColor:"rgb(230, 230, 230)"}}>
        <img  className='px-1'  style={{wigth:"1rem"}} src='https://www.talabat.com/assets/images/rating_ok.svg'/>
        <span className='px-1' style={{color:"gray"}}>OK</span>

        <span className='px-4'  style={{color:"gray"}}>Dina E***</span>

        <div className='py-2' style={{color:"gray"}}>?????????? ?????????? ???????? ?????? ?????? ?????? ?????????? ???????? ???????????? ?????? ???? ?????? ???????? ?????????? ?????????????? ?? ???????? ?????? ???????????? ?? ?????????? ???????? ?????????? ?????? ???????? ???????????? ???????? ???????????? ???????????? ?????????? ?????????? ???????? ???????????? ?????????? ?? ???????? ???????? ?????? ???????? ?????????? ?????????? ???????? ????????????????</div>
    </div>

    <div className='border border-secondary p-2 m-2 d-flex justify-content-center align-items-center'
    style={{backgroundColor:"rgb(230, 230, 230)"}}>
        <a style={{color:"#ff5a00"}}> Read more</a>


    </div>
</div>
           

        </div>
    );
}

export default BasicDetail;
