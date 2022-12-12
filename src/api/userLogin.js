import FirstServer from './FirstServer';

export const user_login = async data => {
  try {
    const result = await FirstServer('/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        api_key: 'c0082183-35d6-4d39-ac7b-819c546c3b73',
        secret_key: 'ecf3ff4a-78d8-4362-9824-3fd272bb3499',
      },
      data: data,
    });
    return result;
  } catch (error) {
    return error.response.data;
  }
};
