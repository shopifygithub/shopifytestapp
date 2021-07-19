import {withRouter} from 'next/router';
import { ClientRouter as AppBridgeClientRouter} from '@shopify/app-bridge-react';

function Client(props){
    const {router} = props;
    return <AppBridgeClientRouter history={router} />
}

export default withRouter(ClientRouter);