import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList"
import searchImages from './api';
import { useState } from 'react';

function App() {
    const [dataApi, setDataApi] = useState([]);
    const makeReq = (async (term) => {
        const res = await searchImages(term);
        setDataApi(res);
    })
    return (
        <div>
            <SearchBar submitForm={makeReq} />
            <ImageList dataApi={dataApi} />
        </div>
    );
}
export default App;