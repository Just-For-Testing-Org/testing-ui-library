import { ButtonProps } from "./types"
import loader from "../../assets/icons/icon-loader.svg"
import './style.css'

const Button: React.FC<ButtonProps> = ({ button, text, isLoading }) => {
    return (
        <div className="relative-button">
            <button onClick={button.onClick} {...button}>
                {isLoading ? 
                    <img src={loader} />
                    :
                    <div>
                        {text ? text : <></>}
                    </div>
                }
            </button>
        </div>
    )
}

export default Button