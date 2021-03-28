import Bowser from "bowser";

export const bowser = () => Bowser.parse(window.navigator.userAgent);
