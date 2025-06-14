// App.js
import React, { useState } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const API_KEY = '8707ef4df6471700ac4996d633d3c185'; // <-- Replace this with your ImgBB API key

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadUrl, setUploadUrl] = useState(null);
  const [uplaoadLoading, setuplaoadLoading] = useState(false);

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (response.didCancel) return;
      if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
        return;
      }

      const asset = response.assets[0];
      setSelectedImage(asset);
    });
  };

  const uploadImage = async () => {
    if (!selectedImage) return Alert.alert('No image selected');
    setuplaoadLoading(true);

    const formData = new FormData();
    formData.append('image', {
      uri: selectedImage.uri,
      type: selectedImage.type || 'image/jpeg',
      name: selectedImage.fileName || 'upload.jpg',
    });

    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setUploadUrl(data.data.url);
        Alert.alert('Success', 'Image uploaded successfully');
      } else {
        Alert.alert('Upload Failed', JSON.stringify(data));
      }
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Upload failed');
    } finally {
      setuplaoadLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Image" onPress={pickImage} />
      {selectedImage !== null && (
        <Image source={{ uri: selectedImage.uri }} style={styles.image} />
      )}

      <TouchableOpacity
        onPress={uploadImage}
        disabled={!selectedImage}
        style={{
          backgroundColor: '#EF798A',
          padding: 10,
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <Text>{!uplaoadLoading ? 'UPLOAD IMAGE' : 'UPLOADING...'}</Text>
      </TouchableOpacity>

      {uploadUrl && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: 'green' }}>Uploaded Image URL:</Text>
          <Text style={{ color: 'blue' }} selectable>
            <Image source={{ uri: uploadUrl }} style={styles.image} />
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  image: { width: 200, height: 200, marginVertical: 20, borderRadius: 10 },
});

export default App;
