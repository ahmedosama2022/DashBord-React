import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineBell} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiFillHeart} from 'react-icons/ai'
import './Top.css'
const Top = () => {
  return (
    <div className='top'>
      <div className='nav'>
        <div className='22'>
        <h1>Welcome To Planti.</h1>
        <p>Hello Ahmed Osama. Welcome back</p>
        </div>
      <div className='input'>
      <input type="search" placeholder="search Here...."/>
       <FiSearch className='icn'/>
      </div>
      <div className='ico'>
        <BsMessenger className='icon' style={{ marginRight:"10px" , backgroundColor:"white", padding:"5px 5px"}}/>
        <AiOutlineBell className='icon'  style={{ marginRight:"10px", backgroundColor:"white", padding:"5px 5px"}}/>
        <img src='8e80a4c4-774b-452b-bcd3-9e0556c04aa4.jpg'/>
      </div>

      </div>
      <section className='sec34'>
        <video src='https://player.vimeo.com/external/354137406.sd.mp4?s=8232c6acb0443407bf5d322e984ac93e54f78073&profile_id=165&oauth2_token_id=57447761' muted autoPlay loop ></video>
        <div className='cs1 '>
        <div className='cc'>
         <h2 style={{ marginLeft: "20px"}}>My Stat</h2>
          <div className='bb flex '>
          <div >
          <h3>Today</h3>
          <h6>6 Orders</h6>
          </div>
          <div style={{ marginLeft: "20px"}}>
          <h3 >This Month</h3>
           <h6>175 Orders</h6>
          </div>
          </div>
          <h4 style={{ marginTop: "20px"}}>Go To My Orders....  -></h4>
         </div>
          
        </div>

      </section>
      <div className='sc1 '>
        <h2>Create and Sell extraordinary</h2>
        <p>The World's growing lndustry today are natura made products</p>
        <div className='btnn flex'>
          <button style={{border:"none"}} >Explor More</button>
          <button style={{backgroundColor:"rgba(255, 255, 255, 0)" ,  marginLeft: "10px", color:"white"}} >Top Sallers</button>
        </div>
      </div>

     <section className='hhk'>
     <section className='bbbn'>
    
      <div className='secc44'>
        <h2>My Lisiting</h2>
        <p>See All -></p>
      </div>

      <section className='sec333'>
        <div className='div22'>
         <AiFillHeart className='io' style={{ color: "green"}}/>
          <img src='https://i.pinimg.com/originals/18/dc/11/18dc118f7850d14cf10bcac495c72075.jpg' style={{ width: "100px", height:"150px"}}/>
          <h3>Annual Vince</h3>
        </div>
        <div className='div22'>
         <AiOutlineHeart className='io'/>
          <img src='https://media.istockphoto.com/id/1344566567/vector/realistic-home-or-office-plant-for-interior-design-and-decoration-tropical-and-exotic-plant.jpg?b=1&s=612x612&w=0&k=20&c=CbzmgbnEHPNFzOQiIrHReebuKHw7lSops0YoQLGI8ao=' style={{ width: "100px", height:"150px"}} />
          <h3>Coffee plant</h3>
        </div>
        <div className='div22'>
         <AiFillHeart className='io' style={{ color: "green"}}/>
          <img src='https://media.istockphoto.com/id/1278906674/photo/monstera-in-a-pot-isolated-on-white-background-close-up-of-tropical-leaves-or-houseplant-that.jpg?s=612x612&w=0&k=20&c=_s8SHj6gP3oA0zx4jH2SvRJGvcLMnnHwMY_FvANDFiU=' style={{ width: "100px", height:"150px"}}/>
          <h3>Button Fern</h3>
        </div>
        <div className='div22'>
         <AiOutlineHeart className='io'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8LcZHdM3Sw2IL_vs2dfIDn8k2NDPug88vO6vp3PAsZB51oPW1AIJnnI4k_r6OirHJjog&usqp=CAU' style={{ width: "100px", height:"150px"}}/>
          <h3>Spider Plant</h3>
        </div>
      </section>

      <section className='seccc'>
        <h3>Top Sallers</h3>
        <p>See All -></p>
        <h3>Featured Sellers</h3>
        <p>See All -></p>
      </section>
      <section className='cec flex'>
        <div className='secv flex'>
         <div>
         <img src='https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png'/>
          <img src='https://i.ytimg.com/vi/abYHgeH7Lwo/maxresdefault.jpg'/>
          <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--hXeyO5ME--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/620613/cd7038e5-d358-43bc-87b3-75f9dd987f53.jpeg'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnZYT6ZaZkFTsKNz9rgblOAvW255EfGlg0g&usqp=CAU'/>
         </div>
          <div className='divvvv '>
            <h6>
                15.5845 Plant Sold
            </h6>
            <p>
            21 sellers
            </p>
          </div>
        </div>
        <div className='secv flex' style={{marginLeft:"20px"}}>
         <div>
         <img src='https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png'/>
          <img src='https://i.ytimg.com/vi/abYHgeH7Lwo/maxresdefault.jpg'/>
          <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--hXeyO5ME--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/620613/cd7038e5-d358-43bc-87b3-75f9dd987f53.jpeg'/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnZYT6ZaZkFTsKNz9rgblOAvW255EfGlg0g&usqp=CAU'/>
         </div>
          <div className='divvvv '>
            <h6>
                15.5845 Plant Sold
            </h6>
            <p>
            21 sellers
            </p>
          </div>
        </div>
      </section>
     </section>

      <section className='secccv'>
        <div className='vvvv flex'>
          <h3>Resent Activity</h3>
          <p>See All -></p>
        </div>
        <div className='vvvvv flex'>
          <div className='ik'>
            <img src='https://i.ytimg.com/vi/abYHgeH7Lwo/maxresdefault.jpg'/>
            <div className='h22'>
            <h4>Ahmed </h4>
            <p>love you</p>
            </div>
           
          </div>
         <div style={{marginLeft: "100px"}}>
         <p>2mints</p>
         </div>
        </div>
        <div className='vvvvv flex'>
          <div className='ik'>
            <img src='https://i.ytimg.com/vi/abYHgeH7Lwo/maxresdefault.jpg'/>
            <div className='h22'>
            <h4>Ahmed </h4>
            <p>love you</p>
            </div>
           
          </div >
          <p style={{marginLeft: "100px"}}>2mints</p>
        </div>
        <div className='vvvvv flex'>
          <div className='ik'>
            <img src='https://i.ytimg.com/vi/abYHgeH7Lwo/maxresdefault.jpg'/>
            <div className='h22'>
            <h4>Ahmed </h4>
            <p>love you</p>
            </div>
           
          </div>
          <p style={{marginLeft: "100px"}}>2mints</p>
        </div>
        <div className='vvvvv flex'>
          <div className='ik'>
            <img src='https://i.ytimg.com/vi/abYHgeH7Lwo/maxresdefault.jpg'/>
            <div className='h22'>
            <h4>Ahmed </h4>
            <p>love you</p>
            </div>
           
          </div>
          <p style={{marginLeft: "100px"}}>2mints</p>
        </div>
        <div className='vvvvv flex'>
          <div className='ik'>
            <img src='https://i.ytimg.com/vi/abYHgeH7Lwo/maxresdefault.jpg'/>
            <div className='h22'>
            <h4>Ahmed </h4>
            <p>love you</p>
            </div>
           
          </div>
          <p style={{marginLeft: "100px"}}>2mints</p>
        </div>
        
      </section>
     </section>
      
    </div>
  )
}

export default Top