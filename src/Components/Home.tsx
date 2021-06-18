import { useState } from "react"
import {Div1, P1,P2,Wrapper,Button} from "./Home.style"

import {ThemeProvider} from "styled-components"

import * as mythemes from "../themes/themes"

// ! Use this in need of multiple theme toggler,

// var randomTheme = function(obj:any){
//     var keys = Object.keys(obj);
//     return obj[keys[keys.length * Math.random()<<0]];
// }

export function Home() {
    const [Theme, setTheme] = useState(mythemes.darkTheme)
    
    const changeTheme = () =>{
        setTheme(Theme === mythemes.lightTheme ? mythemes.darkTheme:mythemes.lightTheme);
    }
    return (
        <ThemeProvider theme={Theme}>
        <Wrapper>
            <Div1>
                <P1>
                    Hi
                </P1>
            </Div1>
                <P2>
                    Click on the Button Below to Toggle Theme
                    </P2> 
        <Button onClick={() => changeTheme()}>Toggle Mode</Button>
        </Wrapper>
        </ThemeProvider>
    );
}


