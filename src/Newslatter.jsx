import reactLogo from './assets/react.svg';
import './App.css';
const Newslatter = () =>{
    return(
  
   <form>
   
   <br/>    
   NewsLetter:
   <br></br>
   
   {/* <h12>Write your name :-</h12> */}
   
   <br/>
   <input type="text" name="name" placeholder='Name' />
   <br></br>
   {/* <h12>Write your Roll.No :-</h12> */}
   <input type="text" name="name" placeholder='Roll No' />
       <br></br>
   {/* <h12>Write your email:-</h12> */}
   <input type="email" name="email" placeholder='Email' />
   <br></br>
   <div>
   <div className="submit"><input type="submit" value="Subscribe" /> </div>
      <div className="Revu">   
      <a >    
      <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      </div>
      <ul className="header">Hello</ul>
      
    </div>
   
 
   <div className='lorem'>
   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste numquam reiciendis sit blanditiis, consequatur maiores dolor esse enim commodi? Voluptatem dolorem perspiciatis minima magni itaque maiores aliquam ab cumque tempore?
   </div>
</form>






    );
};

export default Newslatter;
