import MenuModalStyles from './MenuModal.module.css';
import { MenuBtn } from '../MenuBtn';
interface IMenuModalProps {
    modalTitle?: string;
    children?: React.ReactNode;
    onClose(): void;
}

export function MenuModal({modalTitle, children, onClose}: IMenuModalProps) {
    return (
        <div className={MenuModalStyles.menuModal}>
            <MenuBtn className={MenuModalStyles.closeBtn} onClick={onClose} variant='close' label='X'/>
                
            <h2>{modalTitle}</h2>

            {children}
        </div>
    );
}