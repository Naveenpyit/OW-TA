import './menu.css';
import Popup from '../components/popups';
import {useState ,useEffect,useRef} from 'react';

// https://github.com/Naveenpyit/OW-TA
export default function Menu(){
    let [open , setOpen] = useState('popClose');
    let pop = useRef(null);

    useEffect(()=>{
        function handleOpen(event){
            if(pop.current && !pop.current.contains(event.target)){
                setOpen('popClose');
            }
        }

        document.addEventListener('mousedown',handleOpen);
        return (()=>{
            document.removeEventListener('mousedown',handleOpen);
        })
    },[]);
    return(
        <>
            <div className='mainDiv'>
                <div ref={pop} onClick={()=>{setOpen('popOpen')}} className='menuDiv'></div>
            </div>

            <div className='firstMain'>
                <div>
                <Popup action ={open} />
                </div>
                <div>1234567890</div>
            </div>
        </>
    );
}
