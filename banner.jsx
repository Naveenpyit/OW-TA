import './banner.css';
import { useState } from 'react';

export default function banner(){
    let [index , setIndex]=useState(0);
    let image = [
        '/assets/addedimage.jpg',
        '/assets/logo.png',
        '/assets/addedimage.jpg',
        '/assets/logo.png'
    ];
    return(
        <>
            <div className='container'>
                <div onClick={()=>{
                    if(index == 0){
                        setIndex((image.length-1));
                    }else{
                        setIndex(index-1);
                    }
                    }} className='leftElement'>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className='centerImage'>
                    <img style={{height: 'inherit',width: '100%'}} src={image[index]} alt="Logo" />
                </div>
                <div className='centerElement'>
                    <div className='bannerCircle'>1</div>
                    <div className='bannerCircle'>2</div>
                    <div className='bannerCircle'>3</div>
                </div>
                <div onClick={()=>{
                    if(index == (image.length-1)){
                        setIndex(0);
                    }else{
                        setIndex(index+1);
                    }
                    }}  className='rightElement'>
                    <i className="fas fa-chevron-right "></i>
                </div>
            </div>
        </>
    )
}