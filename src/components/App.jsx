import React from "react";
import Header from "./Header";
import SearchSection from "./SearchSection";
import ListDivider from "./ListDivider";
import RowList from "./RowList";
import Footer from "./Footer";

function App(){
    return (<div>
        <Header />
        <SearchSection />
        <ListDivider divider="Top Categories"/>
        <RowList type="category" />
        <ListDivider divider="Top Shops"/>
        <RowList type="shop" />
        <Footer />
    </div>)
}

export default App;