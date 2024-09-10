import PropTypes from 'prop-types';

const Button = ({label, type, onClick}) => {
  let buttonClass =
    'px-3 py-1 md:px-4 md:py-2 rounded-lg hover:rounded-full text-white -mt-2 md:-mt-0 text-base xl:text-lg shadow-md font-m-plus';

   if (type === 'primary') {
     buttonClass += ' bg-royal-amethyst hover:bg-golden-saffron';
   } else if (type === 'secondary') {
     buttonClass += ' bg-golden-saffron hover:bg-royal-amethyst';
  }

 return (
   <button className={buttonClass} onClick={onClick}>
     {label}
   </button>
 );
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;