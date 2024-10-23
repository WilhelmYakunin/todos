import { ChangeEventHandler } from 'react';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Stack from '@mui/joy/Stack';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import { TextInputLng } from '../../constants'

const { LABEL, PLACEHOLDER, ON_ERROR, COMMON_ERROR_DESCRIPTION } = TextInputLng

 const TextInput = ({ onInput, isError } : { onInput: ChangeEventHandler<HTMLInputElement>, isError: boolean }) => {
  return (
    <Stack spacing={2}>
      <FormControl error>
        <FormLabel>{LABEL}</FormLabel>
        <Input onChange={onInput} placeholder={PLACEHOLDER} error={isError} defaultValue={ON_ERROR} />
        <FormHelperText>
          <InfoOutlined />
          {COMMON_ERROR_DESCRIPTION}
        </FormHelperText>
      </FormControl>
    </Stack>
  );
}

export default TextInput