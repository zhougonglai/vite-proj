import request from '~/utils/request';

export const getSetting = async body => await request(`${import.meta.env.VITE_BASE_PATH}tools/setting`,{
  method: 'post',
  body: JSON.stringify(body)
});


export const getPackagePrice = async params => await request(`${import.meta.env.VITE_BASE_PATH}tools/package/price?${new URLSearchParams(params)}`);
