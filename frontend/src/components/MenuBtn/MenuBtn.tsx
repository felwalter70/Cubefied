import menuBtnStyles from './MenuBtn.module.css';

interface IMenuBtnProps {
    label?: string;
    children?: React.ReactNode;
    onClick(): void;
}

const hoverSound = new Audio('/sounds/hoverOption.wav');

export function MenuBtn({label, children, onClick}: IMenuBtnProps) {
    function handleOnClick() {
        onClick();
    }

    function handleOnMouseOver() {
        hoverSound.currentTime = 0;
        hoverSound.play();
    }

    return (
        <button className={menuBtnStyles.menuBtn} onClick={handleOnClick} onMouseOver={handleOnMouseOver}>
            { label }

            { children }
        </button>
    );
}