
// import {useEffect,useRef} from 'react';
// import gsap from 'gsap';
// import {ScrollTrigger} from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

// export default function HighlightText({text}){
//  const ref=useRef();
//  useEffect(()=>{
//  const words=ref.current.querySelectorAll('span');
//  words.forEach((w,i)=>{
//  gsap.to(w,{
//  color:'#00d4ff',
//  scrollTrigger:{
//  trigger:ref.current,
//  start:`top+=${i*10} center`,
//  end:`top+=${(i+1)*10} center`,
//  scrub:true
//  }
//  })
//  })
//  },[]);

//  return <section className='highlight'><p ref={ref}>
//  {text.split(' ').map((w,i)=><span key={i}>{w} </span>)}
//  </p></section>
// }
