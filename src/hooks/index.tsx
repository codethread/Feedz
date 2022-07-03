import { createContext, FC, useContext, useEffect, useReducer } from 'react';
import { parseString } from 'react-native-xml2js';

/**
 * RSS 2.0 payload from feeds.
 *
 * The XML to JSON conversion combines all alike nodes, so there a number of single-tuples
 * https://validator.w3.org/feed/docs/rss2.html
 */
export interface RSS {
  rss: {
    channel: [
      {
        title: [string];
        docs: [string];
        description: [string];
        lastBuildDate: [string];
        category: string[];
        item: RSSItem[];
      }
    ];
  };
}

interface RSSItem {
  title: [string];
  link: [string];
  enclosure: [{ $: { url: string } }];
  'content:encoded': [string];
  author: [string];
}

type Data<A> =
  | {
      loading: true;
      data: null;
    }
  | { loading: false; data: A };

const RSSContext = createContext<null | Data<RSS>>(null);

export const useRSS = () => {
  const rss = useContext(RSSContext);
  if (!rss) throw new Error('useRSS used outside of Provider');
  return rss;
};

type State = Data<RSS>;
interface Action {
  type: 'loaded';
  data: RSS;
}

const initialRss: State = { loading: true, data: null };

const reducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case 'loaded':
      return {
        loading: false,
        data: action.data,
      };
    default:
      return prevState;
  }
};
export const RSSProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialRss);

  useEffect(() => {
    fetch('https://www.smashingmagazine.com/feed/')
      .then((res) => res.text())
      .then((text) => {
        parseString(text, (err: Error | null, data: RSS | null) => {
          if (err) {
            console.error(err);
          } else if (data?.rss) {
            dispatch({ type: 'loaded', data });
          } else {
            console.warn('could not load rss data');
          }
        });
      })
      .catch((e) => console.error(e));
  }, []);
  return <RSSContext.Provider value={state}>{children}</RSSContext.Provider>;
};
