import {
  FlatList,
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { spacing, styles, text } from '@styles';
import { FC } from 'react';
import { RSS, useRSS } from '@hooks';

// goes grey when viewed
// long press has a menu
interface IFeedCard {
  title: string;
  published: string;
  author?: string;
  img?: string;
}

const FeedCard: FC<IFeedCard> = ({ author, title, published, img }) => {
  return (
    <View style={cardStyles.card}>
      <View style={cardStyles.info}>
        <Text style={{ ...text.cardTitle }}>{title}</Text>
        <Text style={{ ...text.subtle }}>{author}</Text>
        <Text style={{ ...text.subtle }}>{published}</Text>
      </View>
      <View style={cardStyles.imgW}>
        <Image
          source={{ uri: img ?? 'http://placekitten.com/200/300' }}
          style={cardStyles.img}
        />
      </View>
    </View>
  );
};

interface Data {
  title: string;
  data: IFeedCard[];
}

const data: Data[] = [
  {
    title: 'Cats',
    data: [
      {
        title: 'monty',
        published: '3h',
        author: 'Some Author',
      },
      {
        title: 'ratty',
        published: '8w',
      },
    ],
  },
  {
    title: 'More cats',
    data: [
      {
        title: 'floofy tail',
        published: '3h',
      },
    ],
  },
];

const formatData = (rss: RSS): Data => {
  const {
    rss: {
      channel: [
        {
          item,
          title: [title],
        },
      ],
    },
  } = rss;
  return {
    title,
    data: item.map(
      ({ title: [title], link: [link], author: [author], enclosure }) => {
        const [email, ...authorNames] = author.split(' ');
        console.log(enclosure);
        return {
          title,
          // published: link,
          published: '3h',
          author: authorNames.join(' ').replace(/[()]/g, ''),
          img: enclosure[0].$?.url,
        };
      }
    ),
  };
};

// loading spinner
// section list by folder
export const Feed = () => {
  const { data: rss, loading } = useRSS();
  debugger;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {rss?.rss ? (
        <SectionList
          sections={[formatData(rss)]}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={{
                ...text.section,
                marginVertical: spacing.lg,
              }}
            >
              {title}
            </Text>
          )}
          renderItem={({ item }) => <FeedCard {...item} />}
          stickySectionHeadersEnabled={false}
        />
      ) : (
        <Text>loading</Text>
      )}
    </View>
  );
};

const b = (c = 'red') => ({
  borderStyle: 'solid' as const,
  borderColor: c,
  borderWidth: 1,
});

const cardStyles = StyleSheet.create({
  card: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: 16,
  },
  info: {
    flexGrow: 1,
    flexBasis: 150,
  },
  imgW: {
    // flexShrink: 0,
    flexBasis: 150,
    aspectRatio: 1.33,
    ...b('black'),
    borderRadius: 5,
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 5,
    resizeMode: 'cover',
  },
});
