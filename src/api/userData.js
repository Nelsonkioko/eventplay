//user_data returns results from your api request and can be used anywhere in the project
import SecondServer from './SecondServer';

export const user_data = async data => {
  try {
    const result = await SecondServer('/user/data', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};
