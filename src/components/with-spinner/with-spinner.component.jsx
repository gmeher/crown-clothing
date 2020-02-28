import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles'

const withSpinner = WrappedComponent => {
    const newComponent = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ): <WrappedComponent {...otherProps} />
    }

    return newComponent;
}

export default withSpinner;