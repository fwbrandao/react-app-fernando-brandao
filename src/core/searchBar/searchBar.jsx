import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FetchDataContext } from '../../context/fetchDataContext/fetchDataContext';
import { TransactionsContext } from '../../context/transactionsContext/transactionsContext';

export default function SearchBar() {
  const { allData } = useContext(FetchDataContext);
  const { setUserId } = useContext(TransactionsContext);

  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    // adds delay loader
    setTimeout(function () {
      if (active) {
        setOptions(allData.map((obj) => obj));
      }
    }, 500);

    if (!loading) {
      return undefined;
    }

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="search_for_user_id"
      style={{ width: 500 }}
      open={open}
      disableClearable
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(event, newValue) => {
        setUserId(newValue.user_id);
      }}
      getOptionSelected={(option, value) => option.user_id === value.user_id}
      getOptionLabel={(option) => option.user_id}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for user id…"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}