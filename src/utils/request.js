export default (url, options) => fetch(url, options).then(r => r.json());
