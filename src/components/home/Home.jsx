import React,{useEffect,useState} from 'react'
import "./Home.css";
import * as THREE from 'three';
import {FaDiscord,FaInstagram,FaLinkedin} from 'react-icons/fa';
import axios from 'axios'
const Home = () => {
    useEffect(() => {
        const scene=new THREE.Scene();
        const camera=new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        const canvas=document.querySelector('.homeCanvas');
        const renderer=new THREE.WebGLRenderer({canvas});
        renderer.shadowMap.enabled=true;
        renderer.setSize( window.innerWidth/2, window.innerHeight/2 );
        scene.background=new THREE.Color("black");
        const geometry=new THREE.BoxGeometry(4,20,20);
        const material=new THREE.MeshBasicMaterial({color:"gold",
        wireframe:true});
        const cube=new THREE.Mesh(geometry,material);
        
       

        scene.add(cube);
        camera.position.z=4;
        const constSpeed=0.1;
        window.addEventListener('mousemove',(e)=>{
            if(e.clientX<window.innerWidth/2){
                cube.rotation.x-=constSpeed;
                cube.rotation.y-=constSpeed;
                cube.rotation.z-=constSpeed;
                        }
        });
        
        const animate=(time)=>{
            requestAnimationFrame(animate);
           cube.rotation.x=time/4000;
        
            cube.rotation.z=time/4000;
            renderer.setSize(window.innerWidth, window.innerHeight);

            renderer.render(scene,camera);
        }
        animate();
        window.addEventListener('scroll',()=>{
        
            camera.rotation.y=window.scrollY*0.003;
            camera.rotation.z=window.scrollY*0.003;

        })




    } , [])
    const [email,setEmail]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
       // console.log(email)
       var showdate=new Date();
       var date=showdate.getDate()+'/'+showdate.getMonth()+'/'+showdate.getFullYear();
        const data=
        {
            Email:email,
            Date:date
        }
        axios.post('https://sheet.best/api/sheets/f06ce5dc-bc77-460d-844d-931129391a6a',data).then(
            (response)=>{
            console.log(response);
            setEmail(''); 
        })
    }
    


 
  return (
    <div className='home'>
        <canvas className='homeCanvas'> </canvas>
        <div className="homeCanvasContainer">
            < h1 className='main'>
                Nshades
                </h1>
                
        </div>
        <div className='homeContainer'>
            <h1>ABOUT</h1>
            <h2>Nshades is a secured social media platform which connects social profile and creator's nft
                enabling one-to-one chat
            </h2>
            <h5>
                It allows people to post their nft in public and and also makes people to claim nfts with passwords.
 
 Mobile app will be launched soon           
            </h5>
            
         </div>
        
         
                
             
            

         <div className="footercontainer">
            <section className="footersubscription">
                <p className="footersubscription-heading">
                    Subscribe to get the latest updates 
                </p>
                
                <div className="input-area">
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" className='footer-input' placeholder="Your Email" required 
                        onChange={(e)=>setEmail(e.target.value)} value={email}
                        />
                    <button buttonStyle="btn--outline">
                        Subscribe
                    </button>
                    </form>
                </div>
            </section>
           
            <h2 className="connection">
                Connect Us
            </h2>
            <div className="social-icons">
                
                <a href='https://discord.gg/H5DdWbu4mT' target='_blank'
                rel='noreferrer'  className='discord'>
                <FaDiscord size='2em' color='white'/>
                </a>
                <a href='https://instagram.com/nshades.in?igshid=YmMyMTA2M2Y=' target='_blank'
                rel='noreferrer'>
                <FaInstagram size='2em' color='white'/>
                </a>
                <a href='https://www.linkedin.com/company/nshades-in/' target='_blank'
                rel='noreferrer'>
                <FaLinkedin size='2em' color='white'/>
                </a>
            </div>
            <small className='rights'> Nshades © 2022</small>
         </div>
         </div>
  )

  }
export default Home
