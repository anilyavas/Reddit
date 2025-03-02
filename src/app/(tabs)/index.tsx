import { Text, View, FlatList } from 'react-native';
import PostListItem from '../../components/PostListItem';
import posts from '../../../assets/data/posts.json';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
    </View>
  );
}
