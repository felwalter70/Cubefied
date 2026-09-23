import { MenuBtn } from "../../components/MenuBtn";
import { BtnList } from "../../components/BtnList";

import MainMenuStyles from './MainMenu.module.css';
import { MenuModal } from "../../components/MenuModal/MenuModal";

import mainMenuBackgroundImg from '../../assets/sunset.jpg';

import { useState } from "react";

function controlsModal(fn: () => void) {

    return (
        <MenuModal modalTitle="Controles" onClose={fn}>
            <p>Escolha uma das opções para alterar</p>

            <BtnList>
                <MenuBtn onClick={() => {console.log('click')}} label="Ações" />
                <MenuBtn onClick={() => {console.log('click')}} label="Movimento" />
            </BtnList>
        </MenuModal>
    )
}

export function MainMenu() {
    const [modalStack, setModalStack] = useState<React.JSX.Element[]>([]);

    function popStack() {
        setModalStack(modalStack.slice(modalStack.length - 1));
    }

    return (
        <main className={MainMenuStyles.mainMenu} style={{backgroundImage: `url(${mainMenuBackgroundImg})`}}>
            <h1>CUBEFIED 2.0</h1>

            <div className={MainMenuStyles.containerOptions}>
                <BtnList>
                    <MenuBtn onClick={() => {console.log('click')}} label="PLAY!"/>


                    <MenuBtn
                    onClick={() => {setModalStack([...modalStack, controlsModal(popStack)])}}
                    label="CONTROLS"
                    />
                    
                    
                    
                    <MenuBtn onClick={() => {console.log('click')}} label="RANKING"/>
                </BtnList>
            </div>

            { modalStack.length > 0 && modalStack[modalStack.length - 1] }
        </main>
    )
}