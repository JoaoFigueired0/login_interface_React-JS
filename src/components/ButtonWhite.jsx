import '../css/buttonWhite.css';

function ButtonWhite(props) {
  return (
    <div className="flex w-[100%] flex-row justify-around content-center align-center items-center gap-[8px]">
      <a href={props.link}>{props.nameLink}</a>
      <button className='buttonWhite' onClick={props.onClick}>{props.name}</button>
    </div>
  );
}

export default ButtonWhite;