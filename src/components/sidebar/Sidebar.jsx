import { useState } from "react";
import {SidebarHeader} from "./header";
import {Notifications} from "./notifications";
import {Search} from "./search";
import { Conversations } from "./conversations";
import {SearchResults} from "./search";


export default function Sidebar() {
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  return (
    <div className=" w-[40%] h-full select-none">
        {/**Sidebar Header */}
        <SidebarHeader/>
        {/**Notifications*/}
        <Notifications />
        {/**Search*/}
        <Search 
          searchLength={searchResults.length}
          setSearchResults={setSearchResults}
        />
        {
          searchResults.length > 0 ? (
          <>
            {/**Search reasults */}
            <SearchResults searchResults={searchResults}/>
          </>
          ) :  (
            <>
            {/**Conversations */}
             <Conversations/>
            </>
          )
        }
        
    </div>
  )
}
