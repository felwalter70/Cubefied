import MenuModalStyles from './MenuModal.module.css';
import { MenuBtn } from '../MenuBtn';

interface IMenuModalProps {
    modalTitle?: string;
    descText?: string;
    children?: React.ReactNode;
}

export function MenuModal({modalTitle, descText, children}: IMenuModalProps) {
    function handleOnClick() {
        
    }

    return (
        <div className={MenuModalStyles.menuModal}>
            <MenuBtn onClick={handleOnClick}>
                <img src="/imgs/" alt="" />
            </MenuBtn>
            <h2>{modalTitle}</h2>

            {children}
        </div>
    );
}