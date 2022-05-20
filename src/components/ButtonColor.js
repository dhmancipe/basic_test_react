import {useState, useEffect} from 'react';

const ButtonColor  = (props) => {

  const[backgroundColor, setBackgroundColor]=useState('#444444')
  const[borderColor, setBorderColor]=useState('#444444')

  useEffect(
  () => {
    setBackgroundColor(props.backgroud)
    setBorderColor(props.border)
  }, []);

  function onClick() {
    props.callback(borderColor)
  }

  return (
    <div >
      <button
      onClick={onClick}
      style={styles.button({backgroundColor, borderColor})}
      >
      {props.text}</button>
    </div>
  )
}

const styles={
  button:({backgroundColor,borderColor})=>({
    backgroundColor,
    borderColor,
    borderWidth:5,
    width:250,
    padding:12,
    borderRadius:10,
    margin:12,
    fontSize:20,
    color: "white",
    fontWeight:600,
  })
}

export default ButtonColor;
