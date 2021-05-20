import request from '~/utils/request';

export const getActivity = async (id, params) =>
  await request(`${import.meta.env.VITE_BASE_PATH}api/activity/${id}?${new URLSearchParams(params)}`);

export const getActivityPackage = async params =>
  await request(`${import.meta.env.VITE_BASE_PATH}api/activity/package?${new URLSearchParams(params)}`);
