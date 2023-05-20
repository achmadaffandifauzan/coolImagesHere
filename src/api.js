import axios from 'axios';

const searchImages = async (term) => {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID UsCeZ0AlDJBGr4XgY58nnJp5CchcNKtZcXyADNWt4Z8'
        },
        params: {
            query: term,
        }
    });
    return res.data.results;
};

export default searchImages;