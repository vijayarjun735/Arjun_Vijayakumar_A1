import React from 'react';
import { ScrollView, View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Home</Text>
        <Text style={styles.title}>Top Picks for You</Text>
      </View>
      <ImageBackground
        source={{ uri: 'https://i.ytimg.com/vi/T1PS_444rWE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA26SFIJXCvn6Sn1ArXKFMdbD0AHg' }}
        style={styles.featured}
      >
        <Text style={styles.featuredText}>Top Hits</Text>
      </ImageBackground>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Playlists</Text>
        <View style={styles.row}>
          <View style={styles.box}>
            <Image
              source={{ uri: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da849b12b784a6425a23ee7d2a3a' }}
              style={styles.image}
            />
            <Text style={styles.boxText}>Chill Vibes</Text>
          </View>
          <View style={styles.box}>
            <Image
              source={{ uri: 'https://pbs.twimg.com/media/ECgbJuzW4AIdZml.jpg' }}
              style={styles.image}
            />
            <Text style={styles.boxText}>Workout</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recently Played</Text>
        <View style={styles.song}>
          <Image
            source={{ uri: 'https://t2.genius.com/unsafe/227x227/https%3A%2F%2Fimages.genius.com%2F004fdf4afc32fb2a6cbd36aeadfd1637.1000x1000x1.png' }}
            style={styles.songImage}
          />
          <Text style={styles.songText}>All The Stars 🅴 </Text>
        </View>
        <View style={styles.song}>
          <Image
            source={{ uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7d/4c/3b/7d4c3bdf-a33b-2985-3cf7-5aacbefb3289/25UMGIM09489.rgb.jpg/256x256bb.jpg' }}
            style={styles.songImage}
          />
          <Text style={styles.songText}>Timeless 🅴 </Text>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Image source={{ uri: 'https://img.icons8.com/ios/50/home.png' }} style={styles.navIcon} />
          <Text style={styles.navText}>Home</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={{ uri: 'https://img.icons8.com/ios/50/search--v1.png' }} style={styles.navIcon} />
          <Text style={styles.navText}>Search</Text>
        </View>
        <View style={styles.navItem}>
          <Image source={{ uri: 'https://img.icons8.com/ios/50/playlist.png' }} style={styles.navIcon} />
          <Text style={styles.navText}>Library</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    padding: 16,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
  heading: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  featured: {
    height: 200,
    borderRadius: 8,
    justifyContent: 'flex-end',
    padding: 10,
    marginBottom: 20,
  },
  featuredText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    width: '48%',
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  boxText: {
    color: '#fff',
    marginTop: 8,
  },
  song: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  songImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  songText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#333',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
    tintColor: '#fff',
  },
  navText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default App;


