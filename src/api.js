import axios from 'axios';

const searchImages = async () => {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID UsCeZ0AlDJBGr4XgY58nnJp5CchcNKtZcXyADNWt4Z8'
        },
        params: {
            query: 'cars',
        }
    });

    console.log(res)
    return res;
};

export default searchImages;