import './styles/MenuButton.css'
import { useNavigate } from 'react-router-dom';
const MenuButton = ({text, margin, path, onMouseEnter, onMouseLeave}) => {
    const nvg = useNavigate()
    const sty = {
        margin: `0 ${margin}`
    }

    const oc = (event) =>{
        event.preventDefault()
        nvg(path)
    }
    return (
        <>
            <button
                id='m-button'
                style={sty}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseDown={oc}
            >
                {text}
            </button>
        </>
    )
}
export default MenuButton
