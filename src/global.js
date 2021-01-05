const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

let w = canvas.width = innerWidth;
let h = canvas.height = innerHeight;

export default window.GL = {
    w,
    h,
    canvas,
    ctx
}