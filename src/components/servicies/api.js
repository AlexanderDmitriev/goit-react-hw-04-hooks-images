import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const PERSONAL_KEY = '25236091-8685fe5809d54541c15ad7685';

export const getImages = async (data, page) => {
  const url = `${BASE_URL}?key=${PERSONAL_KEY}&q=${data.keyWord}&page=${page}
          &image_type=photo&orientation=horizontal&per_page=12`;
  try {
    const response = await axios.get(url);
    if (response.data.totalHits > 0) {
      return response;
    }
    throw new Error(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  } catch (error) {
    alert(error);
  }
};
