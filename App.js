import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/icon.png')}
        style={styles.welcomeIcon}
      />
      <View style={styles.welcomeDiv}>
        <Text style={styles.welcomeH2}>Welcome to</Text>
        <Text style={styles.welcomeH1}>Yieldy</Text>

        <View style={styles.flexDiv}>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInLabel}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpLabel}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.copyright}>© Copyright Yieldly 2023</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1e26',
    alignItems: 'center',
  },
  welcomeIcon: {
    width: '100%',
    height: '60%',
  },
  welcomeDiv: {
    width: '100%',
    height: '40%',
    backgroundColor: '#FAA61A',
    position: 'absolute',
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    bottom: 0,
    padding: 10,
  },
  welcomeH2: {
    color: '#1c1e26',
    fontSize: 50,
    fontWeight: 'bold',
    opacity: 0.8,
  },
  welcomeH1: {
    color: '#1c1e26',
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  flexDiv: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '5%',
  },
  signInButton: {
    backgroundColor: '#1c1e26',
    padding: 10,
    width: '48%',
    borderRadius: 10,
    height: 50,
  },
  signUpButton: {
    padding: 5,
    width: '48%',
    borderRadius: 10,
    marginLeft: '4%',
    borderWidth: 5,
    borderColor: '#1c1e26',
    height: 50,
  },
  signInLabel: {
    color: '#FAA61A',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpLabel: {
    color: '#1c1e26',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  copyright: {
    color: '#1c1e26',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '5%',
  },
});
