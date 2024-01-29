import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInputContainer, SeparatorContainer, StarCountdownButton, TaskInputContainer } from "./styles";

export function Home(){
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInputContainer id="task" placeholder="De um nome a sua task"/>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInputContainer type="number" id="minutesAmount" placeholder="00"/>

                    <span>minutos.</span>
                </FormContainer>
                
                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <SeparatorContainer>:</SeparatorContainer>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StarCountdownButton type="submit">
                    <Play size={24}/>
                    Comecar
                </StarCountdownButton>
            </form>
        </HomeContainer>
    )
}