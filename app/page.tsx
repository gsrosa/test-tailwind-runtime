import Image from 'next/image'
import Head from "next/head";
import Script from "next/script";
import {useEffect} from "react";

export default function Home() {
  useEffect(() => {
    if(document){

    document.documentElement.style.setProperty("--primary-color-100", "#ccc");
    document.documentElement.style.setProperty("--primary-color-200", "#a1a1a1");
    document.documentElement.style.setProperty("--primary-color-300", "#a2a2a2");
    document.documentElement.style.setProperty("--primary-color-400", "#a3a3a3");
    }
  }, []);
  return (
      <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{width: '100px',height:'100px'}} className={'bg-primary-100'}>test</div>
      <div style={{width: '100px',height:'100px'}} className={'bg-primary-200'}>test</div>
      <div style={{width: '100px',height:'100px'}} className={'bg-primary-300'}>test</div>
      <div style={{width: '100px',height:'100px'}} className={'bg-primary-400'}>test</div>
    </main></>
  )
}
