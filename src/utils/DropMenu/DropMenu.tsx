import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import {OptionProps} from "../interfaces.ts";
import classes from './DropMenu.module.scss';

const DropMenu = ({options}: OptionProps) => {
    return (
        <Box className={classes.Box}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native"/>
            <NativeSelect
                defaultValue={options[0]}
                inputProps={{
                    name: "name",
                    id: "uncontrolled-native",
                }}
                className={classes.Select}
            >
                {options.map((items: string, index: number) => <option value={items} key={index}>{items}</option>
                )}
            </NativeSelect>
        </Box>
    );
}

export default DropMenu