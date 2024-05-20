const generateRandomColor = () => {
  // Generate random values for red, green, and blue components
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  // Construct the color string in hexadecimal format
  return `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
};

const toCapitalise=(str)=>{
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export const GenerateImage = (text) => {
  const backgroundColor = generateRandomColor();
  const textStyle = {
    color: 'white',
    fontSize: '30px',
    textAlign: 'center',
    lineHeight: '30px', // Adjust according to the height of the rectangle
  };

  const containerStyle = {
    width: 450,
    height: 200,
    backgroundColor: backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <span style={textStyle}>{toCapitalise(text)}</span>
    </div>
  );
};

