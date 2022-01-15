import React, { useState } from "react";
import Header from "./Header";
import SearchSection from "./SearchSection";
import ListDivider from "./ListDivider";
import RowList from "./RowList";
import Footer from "./Footer";

function App(){
    
    const [location, setLocation] = useState("Saharanpur");

    function handleFooterClick(loc) {
        setLocation(loc);
    }

    return (<div>
        <Header />
        <SearchSection />
        <ListDivider divider="Top Categories"/>
        <RowList type="category" loc={location} />
        <ListDivider divider="Top Shops"/>
        <RowList type="shop" loc={location} />
        <Footer handleClick={handleFooterClick} />
    </div>)
}

export default App;