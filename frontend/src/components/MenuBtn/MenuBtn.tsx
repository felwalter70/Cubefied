import menuBtnStyles from './MenuBtn.module.css';

type btnVariants = 'default' | 'close';
interface IMenuBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    children?: React.ReactNode;
    variant?: btnVariants;
    onClick(): void;
}

function getBtnType(variant: btnVariants) {
    switch(variant) {
        case 'default': return menuBtnStyles.defaultBtn;
        case 'close': return menuBtnStyles.closeBtn;

    }
}
function getBtnVariant(variant: btnVariants) {
    return `${menuBtnStyles.btn} ${getBtnType(variant)}`;
}

const hoverSound = new Audio('/sounds/hoverOption.wav');
const selectionSound = new Audio('/sounds/optionSelect.mp3');

export function MenuBtn({label, children, onClick, variant = 'default', className}: IMenuBtnProps) {

    function handleOnClick() {
        selectionSound.currentTime = 0;
        selectionSound.play();

        onClick();
    }

    const btnVariant = getBtnVariant(variant);
    const btnClass = `${btnVariant} ${className}`;

    function handleOnMouseOver() {
        hoverSound.currentTime = 0;
        hoverSound.play();
    }

    return (
        <button className={btnClass} onClick={handleOnClick} onMouseOver={handleOnMouseOver}>
            { label }

            { children }
        </button>
    );
}