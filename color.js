
const colors = require("./tokens.json");
const rgbToHex = (r, g, b) => {
    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };
  

  


const tailwindColors ={}
const mappedColors = Object.keys(colors).forEach((color) => {
     // key is like Gray/300 or Primary/500 we need it as an object like {gray:300} or {primary:500}
    let [key, value] = color.split("/");
    
    key = key.toLowerCase().replace(' ', "-");
    // if the key is not in the tailwindColors object, we add it
    if (!tailwindColors[key]) {
        tailwindColors[key] = {};
    }
    // we add the value to the key
    console.log('====================================');
    console.log(colors[color].color);
    console.log('====================================');
  
    // we return the color object
    
    const hexColor = rgbToHex(
        Math.round(colors[color].color.r * 255),
        Math.round(colors[color].color.g * 255),
        Math.round(colors[color].color.b * 255)
      );
    // const hexColor = rgbToHex(
    //     colors[color].color.r*255,
    //     colors[color].color.g*255,
    //     colors[color].color.b*255
    // );
    tailwindColors[key][value] = hexColor;
    
})
console.log(tailwindColors)

  

  