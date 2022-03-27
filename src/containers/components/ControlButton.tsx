type ButtonProps = {
  children: any;
  onClick?: () => void;
}

const ControlButton = ({ children, onClick }: ButtonProps) => {

  return (
    <button onClick={onClick} className='controle__botao'>
      {children}
    </button>
  );

};

export default ControlButton;