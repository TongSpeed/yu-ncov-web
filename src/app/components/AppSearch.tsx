import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { fade, useTheme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import {useRouter} from '../AppContext'
const useStyles = makeStyles(
  theme => ({
   
    root: {
      fontFamily: theme.typography.fontFamily,
      position: 'relative',
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      '& $inputInput': {
        transition: theme.transitions.create('width'),
        width: 120,
        '&:focus': {
          width: 170,
        },
      },
    },
    search: {
      width: 48,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 9),
    },
  }),
  { name: 'AppSearch' },
);

/**
 * When using this component it is recommend to include a preload link
 * `<link rel="preload" href="https://cdn.jsdelivr.net/docsearch.js/2/docsearch.min.css" as="style" />`
 * to potentially reduce load times
 */
export default function AppSearch() {
  const classes = useStyles({});
  const inputRef = React.useRef(null);
  const theme = useTheme();
  const router=useRouter()
 

  React.useEffect(() => {
    const handleKeyDown = (event:any) => {
      // Use event.keyCode to support IE 11
      if (
        [
          191, // '/'
          83, // 's'
        ].indexOf(event.keyCode) !== -1 &&
        document && document.activeElement && document.activeElement.nodeName === 'BODY' &&
        document.activeElement !== inputRef.current
      ) {
        event.preventDefault();
        inputRef && inputRef.current && (inputRef.current as any).focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const desktop = useMediaQuery(theme.breakpoints.up('sm'));

 /*  const [value, setValue] = React.useState<string|undefined>(undefined);

  const handleChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue( event.target.value,);
  }; */
  return (
    <div className={classes.root} style={{ display: desktop ? 'flex' : 'none' }}>
      <div className={classes.search}>
        <SearchIcon />
      </div>
      <Input
        disableUnderline
        placeholder="搜索..."
        inputProps={{
          'aria-label': 'Search',
        }}
        onChange={(obj)=>{
           
        }}
        onKeyDown={(event:React.KeyboardEvent<HTMLInputElement>) => {
            switch (event.key) {
            
                case "Enter":
            
                    const value=((event.target as any).value)
                    if(value && value.length >=2){
                      router.push('/search/[id]',`/search/${value}`)
                    }
                    
                    break;
                case "Esc": // IE/Edge specific value 
                case "Escape":
                    // Do something for "esc" key press.
                    break;
                default:
                    return; // Quit when this doesn't handle the key event.
            }
    
          }

        }
        type="search"
        id="docsearch-input"
        inputRef={inputRef}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </div>
  );
}
