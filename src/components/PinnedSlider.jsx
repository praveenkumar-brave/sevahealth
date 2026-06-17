
import {useEffect,useRef,useState} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function PinnedSlider({title,slides}){
 const ref=useRef();
 const [active,setActive]=useState(0);

 useEffect(()=>{
 const triggers=[];
 slides.forEach((_,i)=>{
 triggers.push(ScrollTrigger.create({
 trigger:ref.current,
 start:()=>`top+=${i*500} center`,
 end:()=>`top+=${(i+1)*500} center`,
 onEnter:()=>setActive(i),
 onEnterBack:()=>setActive(i)
 }))
 });

 ScrollTrigger.create({
 trigger:ref.current,
 pin:true,
 start:'top top',
 end:`+=${slides.length*500}`,
 scrub:true
 });

 return ()=>triggers.forEach(t=>t.kill());
 },[]);

 return <section ref={ref} className='pinned-slider'>
 <div className='left'>
 <h2>{title}</h2>
 <h3>{slides[active].title}</h3>
 <p>{slides[active].desc}</p>
 </div>
 <div className='right'>
 <div className='lottie-placeholder'>LOTTIE {active+1}</div>
 </div>
 </section>
}
