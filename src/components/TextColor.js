import {useState, useEffect} from 'react';


const TextColor  = (props) => {

  useEffect(
  () => {
    setColor(props.color)

  }, [props.color]);

  const[color, setColor]=useState('#444444')
  return (
    <div >
       <h1 style={styles.text({color})} >Prueba Básica React</h1>

    </div>
  )
}

const styles={
  text:({color})=>({
    color,
    marginTop:170,
  })
}

export default TextColor;
