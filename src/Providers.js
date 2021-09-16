import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { DataContext } from 'contexts/DataContext'
import bsc, { UseWalletProvider } from '@binance-chain/bsc-use-wallet'
import { getNodeUrl } from 'services/utils/getRpcUrl'
import { Provider as ReduxProvider } from 'react-redux'
import { REACT_APP_CHAIN_ID } from 'constants/rpc'
import { store } from 'services/redux/store'
import { BrowserRouter as Router } from 'react-router-dom'

const queryClient = new QueryClient()

function Providers({ children }) {
	const rpcUrl = getNodeUrl()
	return (
		<UseWalletProvider
			chainId={parseInt(REACT_APP_CHAIN_ID)}
			connectors={{
				walletconnect: { rpcUrl },
				bsc,
			}}
		>
			<Router>
				<QueryClientProvider client={queryClient}>
					<RefreshContextProvider>
						<ReduxProvider store={store}>
							<DataContext.Provider>{children}</DataContext.Provider>
						</ReduxProvider>
					</RefreshContextProvider>
				</QueryClientProvider>
			</Router>
		</UseWalletProvider>
	)
}

export default Providers
