
const Card = (props) => {

    const clickHandler=(id)=>{
        props.onCardClick(id)
    }

    const classes = props.data.status? 'active ' + props.data.status : '';

  return (
    <div className={'card ' +classes} onClick={()=>{clickHandler(props.ind)}}>
        <div className="content">
            {props.data.emoji}
        </div>
    </div>
  )
}

export default Card