import api from '@config/nasaAPI';
import { NasaApodElement } from '@interfaces/nasa';

const BASE_PATH = '/planetary/apod';

const ApodService = {
  getRandomPicture: () => {
    return api.get<NasaApodElement[]>(BASE_PATH, {
      count: 1
    });
  }
};

export default ApodService;
