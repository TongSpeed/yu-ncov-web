/* eslint-disable react/no-danger, react-hooks/exhaustive-deps */
import 'isomorphic-fetch';
import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { getCookie } from 'macoolka-ui-core/lib/utils';
import {useAppConstant,useRouter} from './AppContext'
//import {useI18N} from '../context/I18NContext'

//import { State } from '../redux/types'
function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}
interface Message {
  id: number,
  text: string,
  userLanguage?: string
  route?: string
}
function getLastSeenNotification() {
  const seen = getCookie('lastSeenNotification');
  return (seen === undefined || seen === '') ? 0 : parseInt(seen, 10);
}

let messages: Message[] | null = null;

async function getMessages() {
  try {
    if (!messages) {
      await sleep(1500); // Soften the pressure on the main thread.
      const result = await fetch(
        '/notifications.json',
      );
      messages = await result.json();
    }
  } catch (err) {
    // Swallow the exceptions.
  }

  messages = messages || [];
}

export default function Notifications() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState<Message>({ id: -1, text: '' });
  const { route } = useRouter();
  const {close}=useAppConstant();
//  const t = useI18N();
 // const userLanguage = useSelector((state:State) => state.options.userLanguage);

  const handleMessage = () => {
    const lastSeen = getLastSeenNotification();
    if (messages) {
      const unseenMessages = messages.filter(message2 => {
        if (message2.id <= lastSeen) {
          return false;
        }

      /*   if (
          message2.userLanguage &&
          message2.userLanguage !== userLanguage &&
          message2.userLanguage !== navigator.language.substring(0, 2)
        ) {
          return false;
        } */

        if (message2.route && message2.route !== route) {
          return false;
        }

        return true;
      });

      if (unseenMessages.length > 0) {
        setMessage(unseenMessages[0]);
        setOpen(true);
      }
    }

  };

  const handleClose = () => {
    setOpen(false);
    document.cookie = `lastSeenNotification=${message.id};path=/;max-age=31536000`;
  };

  React.useEffect(() => {
    let active = true;

    // Prevent search engines from indexing the notification.
    if (/glebot/.test(navigator.userAgent)) {
      return undefined;
    }

    (async () => {
      await getMessages();
      if (active) {
        handleMessage();
      }
    })();

    return () => {
      active = false;
    };
  }, [route]);

  return (
    <Snackbar
      key={message.id}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      ContentProps={{ 'aria-describedby': 'notification-message' }}
      message={
        <span id="notification-message" dangerouslySetInnerHTML={{ __html: message.text }} />
      }
      action={
        <Button size="small" color="secondary" onClick={handleClose}>
          {close}
        </Button>
      }
      open={open}
      autoHideDuration={20e3}
      onClose={handleClose}
      onExited={handleMessage}
    />
  );
}
