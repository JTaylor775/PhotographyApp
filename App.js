import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import SamScott from './images/SamScot.jpg';
import MiniTan from './images/MiniTanTan.jpg';
import Mustang from './images/Mustang.jpg';
import Me from './images/ME.jpg';
import Bullets from './images/Bullets.jpg';
import CoverPhoto from './images/CoverPhoto.jpg';
import PMustang1 from './images/Parker1.jpg';
import PMustang2 from './images/Parker2.jpg';
import PMustang3 from './images/Parker3.jpg';
import Button from './Button';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

function HomePage({ button, index }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.displayName}>Hello Everyone! Welcome to my photography app.</Text>
        <Text style={styles.textWC}>You can read about my story, look through some of my best photos,
          or sign up for a photoshoot for yourself!</Text>
        <Image style={styles.image} source={CoverPhoto} />
        <Text style={styles.displayName}>My story:</Text>
        <Text style={styles.textW}>My photography journey started in 2020 during covid. I was looking for a
          new hobby. I knew I had always liked taking pictures, so I figured I would buy an amerature
          camera and try my luck. I fell inlove very quickly and had my first photoshoot within a few months.{'\n'} </Text>
        <Text style={styles.textW}>I grew up around cars and trucks, so my first thought was to combine my two hobbies.
          This is how I got my first photoshoot. A friend of mine wanted some pictures of his mustang to post on social media.
          I told him I would be willing to take pictures for a very cheap cost, since it was my first time. Ever since then,
          I have worked to continue my passion for photography and cars by focusing my content towards the automotive industry.{'\n'} </Text>
        <Text style={styles.textW}>Below are a few pictures from my very first photoshoot. Looking back, these pictuers aren't great.
          When these pictures were taken, I thought they were pretty amazing since I wasn't as skilled as I am today.</Text>
        <Image style={styles.image} source={PMustang1} />
        <Image style={styles.image} source={PMustang2} />
        <Image style={styles.image} source={PMustang3} />
        <Button
          info style={styles.button}
          key={index}
          onPress={() => WebBrowser.openBrowserAsync('https://www.instagram.com/jt.photographyo7/')
          }
        >
          <Text style={styles.textB}>Instagram Profile</Text>
        </Button>
      </View>
    </ScrollView>
  );
}

function Portfolio({ index }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.textW}>This picture features a beautiful 3rd gen Dodge. I took this picture of my friend's truck at a show event.
            This event is called "Cars and Coffee" and is hosted by a detailing shop in Lincoln NE.
          </Text>
          <Image style={styles.image} source={SamScott} />
        </View>
        <View>
          <Text style={styles.textW}>{'\n'}This picture is of my friend and his motorcycle. I used Adobe Photoshop to turn him into a fun bobble head.
            The background is a stock image from google. I have done this with a lot of my friends, and even myself. I found that is it a fun and easy
            twist to put on what could potentially be a boring picture.
          </Text>
          <Image style={styles.image} source={MiniTan} />
        </View>
        <View>
          <Text style={styles.textW}>{'\n'}At the time, this was one of my favorite pictures I had ever taken.
            This was taken at EZ GO on 27th and O during a friday night cruise night. I saw a beautiful
            mustang parked and I took a few pictures before it drove away. I was able to turn the lights in the image
            a bright red thanks to Adobe Lightroom.</Text>
          <Image style={styles.image} source={Mustang} />
        </View>
        <View>
          <Text style={styles.textW}>To this day, this is my favorite picture. This is me on my motorcycle
            with a real belt of .50 caliber bullets. I also used photoshop to add a faint skeleton outline into my helmet where my face should be.
            I have this picture printed in glass hanging in my office. This picture took a year to create, from planning to execution.
            Followed by editing, editing, and more editing.</Text>
          <Image style={styles.image} source={Bullets} />
        </View>
      </ScrollView>
      <Button
        info style={styles.button}
        key={index}
        onPress={() => WebBrowser.openBrowserAsync('https://www.instagram.com/jt.photographyo7/')
        }
      >
        <Text style={styles.textB}>Social Media Page</Text>
      </Button>
    </View>
  );
}

function Form({ index }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [textBox, setTextBox] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        {textBox === false ? <Text></Text> : <Text style={styles.displayName}>Thank you {firstName} {lastName}!</Text>}
        <Image style={styles.image} source={Me} />
        <Text style={styles.textW}>First Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={firstName => setFirstName(firstName)}
          defaultValue={firstName}
          placeholder="First name" />
        <Text style={styles.textW}>Last Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={lastName => setLastName(lastName)}
          placeholder="Last name" />
        <Text style={styles.textW}>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={email => setEmail(email)}
          placeholder="Email" />
        <Text style={styles.textW}>What do you want pictures of:</Text>
        <TextInput
          style={styles.input}
          onChangeText={subject => setSubject(subject)}
          placeholder="Ex. Car, person, dog, etc" />
        <Button
          info style={styles.button}
          key={index}
          onPress={() => setTextBox(true)}
        >
          <Text style={styles.textB}>Submit</Text>
        </Button>
      </ScrollView>
    </View>
  );
}

function ClientDisplay({ index }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.displayName}>This is where I will display everyone from the database who has entered their information.</Text>
        <Image style={styles.image} source={Me} />
      </ScrollView>
    </View>
  );
}

export default function App() {

  SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="JT-Photography Home Page" component={HomePage} />
        <Drawer.Screen name="Portfolio" component={Portfolio} />
        <Drawer.Screen name="Photoshoot Form" component={Form} />
        <Drawer.Screen name="Client Info Display" component={ClientDisplay} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    padding: 5
  },
  imageList: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 60,
    borderRadius: 3,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    backgroundColor: '#7FFF00',
  },
  image: {
    width: 320,
    height: 480,
    marginVertical: 50
  },
  textW: {
    color: '#F8F8FF'
  },
  textWC: {
    color: '#F8F8FF',
    textAlign: 'center'
  },
  textB: {
    color: 'black',
  },
  navContainer: {
    color: '#7FFF00'
  },
  input: {
    backgroundColor: '#ecf0f1',
    borderRadius: 3,
    height: 40,
    padding: 5,
    marginBottom: 10,
    flex: 1,
    fontSize: 24,
  },
  displayName: {
    fontSize: 35,
    color: '#F8F8FF',
    textAlign: 'center'
  }
});