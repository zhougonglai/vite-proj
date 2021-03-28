import request from '~/utils/request';

export const getActivityPackage = async params => await request(`${import.meta.env.VITE_BASE_PATH}api/activity/package?${new URLSearchParams(params)}`);
