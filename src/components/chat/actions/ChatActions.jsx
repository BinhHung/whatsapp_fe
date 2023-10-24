import { useDispatch, useSelector } from "react-redux";
import { SendIcon } from "../../../svg";
import Attchments from "./Attchments";
import EmojiPickerApp from "./EmojiPickerApp";
import Input from "./Input";
import { useRef, useState } from "react"
import { sendMessage } from "../../../features/chatSlice";
import { ClipLoader } from "react-spinners";


export default function ChatActions() {
  const dispatch = useDispatch();
  const {activeConversation, status} = useSelector((state) => state.chat)
  const {user} = useSelector((state) => state.user);
  const {token} = user;
  const [message, setMessage] = useState("");
  const textRef = useRef();
  const values = {
    message,
    convo_id: activeConversation._id,
    files: [],
    token,
  }
  const SendMessageHandler = async(e) =>{
    e.preventDefault();
    await dispatch(sendMessage(values));
    setMessage("");
  }
  return (
    <form 
    onSubmit={(e)=> SendMessageHandler(e)}
    className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 select-none">
        {/**Container*/}
        <div className="w-full flex items-center gap-x-2">
            {/**Emojis and attachpments*/}            
            <ul className="flex gap-x-2">
                <EmojiPickerApp 
                  message={message}
                  setMessage={setMessage}
                  textRef={textRef}
                />
                <Attchments/>
            </ul>
            {/**Input*/}
            <Input
              message={message}
              setMessage={setMessage}
              textRef={textRef}
            />
            {/**Send button*/}
            <button type="submit" className="btn">
              {status==="loading" ? (<ClipLoader color="#E9EDEF" size={25}/>
                ) : (
                <SendIcon className="dark:fill-dark_svg_1"/>
                )}
            </button>
        </div>
    </form>
  )
}
