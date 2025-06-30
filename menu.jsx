import './menu.css';
import react,{useState ,useEffect,useRef} from 'react';


// https://github.com/Naveenpyit/OW-TA
export default function Menu(){
    let [open , setOpen] = useState(false);
    let pop = useRef(null);

    useEffect(()=>{
        function handleOpen(event){
            if(pop.current && !pop.current.contains(event.target)){
                setOpen(false);
            }
        }

        document.addEventListener('mousedown',handleOpen);
        return (()=>{
            document.removeEventListener('mousedown',handleOpen);
        })
    },[]);

    return(
        <div ref={pop} onClick={()=>{setOpen(true)}} className='menuDiv'>
            {open && (
                <div className='pop'>
                    hi bro
                </div>
            )}
        </div>
    );
}