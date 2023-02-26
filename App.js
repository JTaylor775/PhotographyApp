import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import art from './images/art.png';
import mile from './images/mile.png';
import pier from './images/pier.png';
import water from './images/water.png';
import willis from './images/willis.png';
import Button from './Button';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

const Drawer = createDrawerNavigator();

function ArtInstituteOfChicago({ button, index }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonList}>
        <Image style={styles.image} source={art} />
        <Button
      info style={styles.button}
      key={index}
      onPress={() => WebBrowser.openBrowserAsync('https://www.artic.edu/')
    }
    >
      <Text style={styles.text}>More Information</Text>
    </Button>
    
      </View>
    </View>
  );
}

function MagnificentMile({ index }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonList}>
        <Image style={styles.image} source={mile} />
        <Button
      info style={styles.button}
      key={index}
      onPress={() => WebBrowser.openBrowserAsync('https://www.themagnificentmile.com/')
    }
    >
      <Text style={styles.text}>More Information</Text>
    </Button>
      </View>
    </View>
  );
}

function NavyPier({ index }) {
  return (
    <View style={styles.container}>
    <View style={styles.buttonList}>
      <Image style={styles.image} source={pier} />
      <Button
      info style={styles.button}
      key={index}
      onPress={() => WebBrowser.openBrowserAsync('https://navypier.org/')
    }
    >
      <Text style={styles.text}>More Information</Text>
    </Button>
    </View>
  </View>
  );
}

function WaterTower({ index }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonList}>
        <Image style={styles.image} source={water} />
        <Button
      info style={styles.button}
      key={index}
      onPress={() => WebBrowser.openBrowserAsync('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html')
    }
    >
      <Text style={styles.text}>More Information</Text>
    </Button>
      </View>
    </View>
  );
}

function WillisTower({ index }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonList}>
        <Image style={styles.image} source={willis} />
        <Button
      info style={styles.button}
      key={index}
      onPress={() => WebBrowser.openBrowserAsync('https://www.willistower.com/')
    }
    >
      <Text style={styles.text}>More Information</Text>
    </Button>
      </View>
    </View>
  );
}

export default function App() {

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Art Institute Of Chicago" component={ArtInstituteOfChicago} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonList: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 60,
    borderRadius: 3,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    width: 320,
    height: 480,
  }
});