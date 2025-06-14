📷 React Native Image Upload Functionality
Author: harmansaini4tech
This guide provides step-by-step instructions to implement image upload functionality in a React Native application using the react-native-image-picker library.


🚀 Prerequisites
Ensure you have the following installed:

React Native CLI setup

Android Studio configured

Node.js and npm



📦 Step 1: Install Dependencies
Install the react-native-image-picker package using npm:

bash
Copy
Edit
npm install react-native-image-picker


🔐 Step 2: Add Android Permissions
Open the AndroidManifest.xml file located at:

css
Copy
Edit
android/app/src/main/AndroidManifest.xml
Add the following permissions inside the <manifest> tag:

xml
Copy
Edit
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"
    android:maxSdkVersion="28"/>

    
📂 Step 3: Implement UI and Logic
Copy the contents of the App.jsx file provided and paste it into your own App.js or App.jsx file. This file includes the full implementation of the image picker and upload logic.

Make sure your React Native component includes proper handling for permissions and platform-specific behavior.



🧪 Step 4: Run the Application
In two separate terminal windows, run the following commands:

bash
Copy
Edit
npm start
bash
Copy
Edit
npm run android
This will start the Metro bundler and launch your app on the Android emulator or connected device.



✅ Result
You should now be able to select an image from your device and display/upload it within your app.



🛠️ Troubleshooting
If you face permission issues on Android 13+, make sure you’re handling runtime permissions appropriately.

Use PermissionsAndroid from react-native to request permissions at runtime if needed.



🧾 License
This project is for learning and development purposes.
