import { BurgerButtonProps } from '../Interfaces';

export const BurgerButtonTwo: React.FC<BurgerButtonProps> = ({
   handlerClick,
   menuOpen,
   theme
}) => {
   const buttonClass = menuOpen
      ? 'ham hamRotate hamSection active'
      : 'ham hamRotate hamSection';
   return (
      <>
         <svg
            className={buttonClass}
            viewBox="0 0 100 100"
            width="60"
            onClick={handlerClick}
         >
            <path
               className={`${theme === "light" ? "lineSection-light" : "lineSection"} top`}
               d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
            />
            <path className={`${theme === "light" ? "lineSection-light" : "lineSection"} middle`} d="m 70,50 h -40" />
            <path
               className={`${theme === "light" ? "lineSection-light" : "lineSection"} bottom`}
               d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
            />
         </svg>
      </>
   );
};
