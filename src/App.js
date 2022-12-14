import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] =useState("");
  const [cn, setCn] = useState("");
  const [url,setUrl] = useState("");
  const [list,setList]=useState([])
  const [show,setShow]=useState(false);
  const [styles,setStyle]=useState("");

  const handleSubmit1=(f)=>{
    f.preventDefault();
    setStyle("");
    setList([])
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email,cn,url)
    const date={name,email,cn,url}
    if(name&&email&&cn&&url){
      setShow(true)
      setStyle("Cards");
     setList((ls)=>[...ls,date])
      setName("")
      setEmail("")
      setCn("")
      setUrl("")
    }
  }
  return (
    <div >
    <h2 style={{textAlignVertical: "center",textAlign: "center",fontWeight: 'bold',color:"#023020",textShadow:"2px 2px yellow"}}>Card Creator</h2>
  <form onSubmit={handleSubmit}>
  <label>Please Enter your name</label>
  <input name="name" value={name} onChange={(e)=>setName(e.target.value)}
   placeholder='test'/><br/>
  <label>Please Enter your email</label>
  <input name="email" value={email} onChange={(e)=>setEmail(e.target.value)}
  placeholder='test@gmail.com'/><br/>
   <label>Enter your Contact Number</label>
   <input name="cntNum" value={cn} onChange={(e)=>setCn(e.target.value)}
  placeholder='123'/><br/>
<label>Paste your profile picture URL</label>
   <input name="URL" value={url} onChange={(e)=>setUrl(e.target.value)}
  placeholder='123'/><br/>
<input type="submit" value={"Create Card"} className="submitButton" />
</form>
 {
    <div  className={styles}>

         {
               list.map((c)=>
              <div>
               
             {show?<span>Name : </span>:null}
              {show?<span>{c.name}</span>:null}<br/><br/>
             
             {show?<span>Email : </span>:null}
             {show? <span>{c.email}</span>:null}<br/><br/>
             
              {show?<span>Contact Number : </span>:null}
             {show? <span>{c.cn}</span>:null}<br/><br/>
             
             <input type="submit" onClick={handleSubmit1} value="Delete" style={{backgroundColor:"#002366",width: "110px",color:"white"}}/>
             
             
              
             
            
                
                
            
                
            
            
             
             </div>)
         }
               
               
            
      
</div>}
</div>
    
  );
}

export default App;

