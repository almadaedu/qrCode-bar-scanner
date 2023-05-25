import React,{useContext,useState} from 'react'
import { Alert,ToastAndroid } from 'react-native'

const AppContext = React.createContext()

export const AppProvider = ({children})=> {

    const [isFlashLightOn,setIsFlashLightOn] = useState(false)

    const [historyList,setHistoryList] = useState([])


    const [scanned, setScanned] = useState(false);

    const deleteItem = (id)=> {
        setHistoryList(historyList.filter((item)=> item.id !== id))
    }

    // show toast msg and clear the history list state variable
    const showToastAndClearHistory = ()=> {
        setHistoryList([])
        ToastAndroid.show('Histórico limpo', ToastAndroid.SHORT)
    }
    

    // ask user to confirm clear history list
    const clearHistoryList = ()=> {
        Alert.alert('Limpar histórico?', 'Todos os escaneamentos serão excluídos',
            [
                {
                    text:'Não',
                    style:'cancel'
                },
                {
                    text:'Sim',
                    onPress:()=>showToastAndClearHistory()
                }
            ],
            {
                cancelable: true
            }
        )  
    }


    const toggleFlashLight = ()=> {
        setIsFlashLightOn(!isFlashLightOn)
    }


    return (
        <AppContext.Provider
            value={{
                isFlashLightOn,
                toggleFlashLight,
                historyList,
                setHistoryList,
                clearHistoryList,
                scanned,
                setScanned,
                deleteItem,
            }}
        >
            {children} 
        </AppContext.Provider>
    )
}



export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

