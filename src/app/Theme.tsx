
import { blue, grey } from '@material-ui/core/colors';
import { CreateTheme, createTheme as _createTheme } from 'macoolka-ui-core'
import { merge } from 'macoolka-object'

declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {

        app: {
            nprogress: {
                color: string
            },
            appNav: {
                backgroundColor: string,
                color: string
            },
            appBar: {
                backgroundColor: string,
                color: string
            },
            appContent: {
                backgroundColor: string,
                color: string
            },
            appNavDivider: {
                backgroundColor: string,
            }
        }
    }
    // allow configuration using `createMuiTheme`
    interface ThemeOptions {

        app?: {
            nprogress?: {
                color?: string
            },
            appNav?: {
                backgroundColor?: string,
                color?: string
            },
            appBar?: {
                backgroundColor?: string,
                color?: string
            },
            appContent?: {
                backgroundColor?: string,
                color?: string
            },
            appNavDivider?: {
                backgroundColor?: string,
            }
        }
    }
}
export const createTheme: CreateTheme = (a = {}) => {
    const { options, buildComponents } = a

    return _createTheme(
        {
            options: merge({}, {
                app: {
                    nprogress: {
                        color: '#000'
                    },
                    appNav: {
                        backgroundColor: "#fff",
                        color: "inherit"
                    },
                    appBar: {
                        backgroundColor: blue[700],
                        color: "#fff"
                    },
                    appContent: {
                        backgroundColor: grey[100],
                        color: "inherit"
                    },
                    appNavDivider: {
                        backgroundColor: "rgba(0, 0, 0,0.38)"
                    }
                }

            }, options),
            buildComponents
        })
}
export const highDensity = {
    props: {
        MuiButton: {
            size: 'small',
        },
        MuiFilledInput: {
            margin: 'dense',
        },
        MuiFormControl: {
            margin: 'dense',
        },
        MuiFormHelperText: {
            margin: 'dense',
        },
        MuiIconButton: {
            size: 'small',
        },
        MuiInputBase: {
            margin: 'dense',
        },
        MuiInputLabel: {
            margin: 'dense',
        },
        MuiListItem: {
            dense: true,
        },
        MuiOutlinedInput: {
            margin: 'dense',
        },
        MuiFab: {
            size: 'small',
        },
        MuiTable: {
            size: 'small',
        },
        MuiTextField: {
            margin: 'dense',
        },
        MuiToolbar: {
            variant: 'dense',
        },
    },
    overrides: {
        MuiIconButton: {
            sizeSmall: {
                // minimal touch target hit spacing
                marginLeft: 4,
                marginRight: 4,
                padding: 12,
            },
        },
    },
};