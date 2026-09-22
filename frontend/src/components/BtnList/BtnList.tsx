import BtnListStyles from './BtnList.module.css';

interface IBtnListProps {
    children: React.ReactNode;
}

export function BtnList({children}: IBtnListProps) {
    return (
        <div className={BtnListStyles.btnList}>
            { children }
        </div>
    );
}