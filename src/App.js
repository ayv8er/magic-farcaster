import React from 'react';
import { magic } from './magic';
import { web3 } from './web3';
import './App.css';

function App() {
  const [metadata, setMetadata] = React.useState(null);

  const handleFarcasterLogin = async () => {
    const handle = magic.farcaster.login({ showUI: true });

    handle
      .on('channel', (channel) => {
        console.log('channel', channel)
      })
      .on('done', (data) => {
        console.log('farcaster returned data', data)

        magic.user.isLoggedIn().then(boolean => {
          console.log('Magic isLoggedIn', boolean)
        })

        magic.user.getInfo().then(metadata => {
          console.log('Magic getInfo', metadata)
          setMetadata(metadata)
        })

      })
  };

  const handlePersonalSign = async () => {
    console.log('publicAddress', metadata.publicAddress)
    const signedMessage = await web3.eth.personal.sign('abc', metadata.publicAddress);
    console.log('signedMessage', signedMessage)
  }

  const handleGetDidToken = async () => {
    const did = await magic.user.getIdToken()
    console.log('Magic didToken', did)
  }

  const handleShowUi = async () => {
    magic.wallet.showUI()
      .on('disconnect', () => {
        handleLogoutClick()
      });
  };

  const handleLogoutClick = () => {
    const boolean = magic.user.logout()
    console.log('is Magic logged out?', boolean)
  };

  return (
    <main>
      {
        metadata ? metadata.username : "Not logged in..."
      }
      {
        !metadata ? <div>
          <label>Login with Farcaster</label>
          <button onClick={handleFarcasterLogin}>
            Login
          </button>
        </div> : null
      }
      {
        metadata ? <div>
          <button onClick={handlePersonalSign}>
            Personal sign "abc"
          </button>
          <button onClick={handleShowUi}>
            showUI
          </button>
          <button onClick={handleGetDidToken}>
            get didToken
          </button>
          <button onClick={handleLogoutClick}>
            Logout
          </button>
        </div> : null
      }
    </main>
  )
}
export default App;