import { SendIcon } from "../../../svg";
import Attchments from "./Attchments";
import EmojiPicker from "./EmojiPicker";
import Input from "./Input";

export default function ChatActions() {
  return (
    <form className="dark:bg-dark_bg_2 h-[60px] w-full flex items-center absolute bottom-0 py-2 select-none">
        {/**Container*/}
        <div className="w-full flex items-center gap-x-2">
            {/**Emojis and attachpments*/}            
            <ul className="flex gap-x-2">
                <EmojiPicker/>
                <Attchments/>
            </ul>
            {/**Input*/}
            <Input/>
            {/**Send button*/}
            <button className="btn">
                <SendIcon className="dark:fill-dark_svg_1"/>
            </button>
        </div>
    </form>
  )
}
