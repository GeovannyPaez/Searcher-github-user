import { Stack, TextField,InputAdornment } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import {useState,ChangeEvent} from 'react'
import { StyleStack, StyleTextField } from "./style"
import {Search} from '@mui/icons-material'
interface PropsSearcher {
    onSearch:React.Dispatch<React.SetStateAction<string>>
}

export const Searcher:React.FC<PropsSearcher> = ({onSearch}) => {
    const [inputValue, setInputValue ] = useState('');
    const onHandleSearch =()=>onSearch(inputValue);
    const onChangeInput = (event:ChangeEvent<HTMLInputElement>)=>{
        const value = event.target.value;
        setInputValue(value);
        
    }
    return (
        <Stack direction={'row'} sx={StyleStack}>
            <TextField 
            sx={StyleTextField}
            type='search'
            autoComplete="off"
            label='Github User'
            id='outlined-basic'
            value={inputValue}
            placeholder="Octocat"
            onChange={onChangeInput}
            InputProps={{
                endAdornment:(
                    <InputAdornment  position="end">
                        <Search fontSize="small" onClick ={onHandleSearch}  sx={{cursor:'pointer'}}/>
                    </InputAdornment>
                )
            }
            }
            />
            <IconButton></IconButton>
        </Stack>
    )
}
