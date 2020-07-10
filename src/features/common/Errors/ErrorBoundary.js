import React from 'react'
import classes from './ErrorBoundary.module.scss'
import logo from 'ui/assets/favicon.png'
import { Typography, Button } from '@material-ui/core';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null, stackOpen: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo })
    }

    openStack = () => {
        this.setState({ stackOpen: !this.state.stackOpen })
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={classes.container}>
                    {console.log(this.state.errorInfo)}
                    <div>
                        <span style={{ color: `var(--secondary)`, textShadow: `2px 2px 0 var(--primary)` }}>O</span>
                        <span style={{ color: `var(--primary)`, textShadow: `2px 2px 0 var(--secondary)` }}>o</span>
                        <span style={{ color: `var(--secondary)`, textShadow: `2px 2px 0 var(--primary)` }}>p</span>
                        <span style={{ color: `var(--primary)`, textShadow: `2px 2px 0 var(--secondary)` }}>s</span>
                        <span style={{ color: `var(--secondary)`, textShadow: `2px 2px 0 var(--primary)` }}>!</span>
                    </div>
                    <img src={logo} alt="logo" />
                    <Typography
                        variant='h5'
                        className={classes.title}
                    >
                        Что-то пошло не так
                    </Typography>
                    <Typography
                        variant='h6'
                        color='secondary'
                    >
                        {this.state.error && this.state.error.message}
                    </Typography>
                    <Typography
                        variant='body1'
                        style={{ whiteSpace: `pre` }}
                        className={`${classes.stackTrace} ${this.state.stackOpen ? classes.open : null}`}
                    >
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </Typography>
                    <div
                        onClick={this.openStack}
                        className={classes.openBtn}
                    >
                        {this.state.stackOpen ? 'Закрыть стек...' : 'Открыть стек...'}
                    </div>

                    <div
                        className={classes.reload}
                    >
                        <a href='/'>На главную</a>
                    </div>
                </div>
            )
        }

        return this.props.children;
    }
}