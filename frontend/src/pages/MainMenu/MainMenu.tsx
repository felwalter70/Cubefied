import { MenuBtn } from "../../components/MenuBtn";
import { BtnList } from "../../components/BtnList";

import MainMenuStyles from './MainMenu.module.css';
import { MenuModal } from "../../components/MenuModal/MenuModal";

export function MainMenu() {
    return (
        <main className={MainMenuStyles.mainMenu}>
            <h1>CUBEFIED 2.0</h1>

            <div className={MainMenuStyles.containerOptions}>
                <BtnList>
                    <MenuBtn onClick={() => {console.log('click')}} label="PLAY!"/>
                    <MenuBtn onClick={() => {console.log('click')}} label="CONTROLS"/>
                    <MenuBtn onClick={() => {console.log('click')}} label="RANKING"/>
                </BtnList>
            </div>

            <MenuModal modalTitle="Controles">
                <p>Escolha uma das opções para alterar</p>

                <BtnList>
                    <MenuBtn onClick={() => {console.log('click')}} label="Ações" />
                    <MenuBtn onClick={() => {console.log('click')}} label="Movimento" />
                </BtnList>
            </MenuModal>

        </main>
    )
}