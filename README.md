# HelloApp - React Native Android Demo

A simple React Native app to get you started with mobile development on Android!

## Prerequisites

Before you begin, make sure you have the following installed:

1. **Node.js** (v18 or newer)
2. **Android Studio** with:
   - Android SDK
   - Android SDK Platform 35
   - Android Build Tools
   - Android Emulator (optional, for testing without a physical device)
3. **Java Development Kit (JDK)** 17 or newer

## Setup Instructions

### 1. Install Dependencies

First, install the npm packages:

```bash
npm install
```

This will install all the necessary dependencies including React Native and its tools.

### 2. Set Up Your Android Phone

To run the app on your Android phone, you need to enable Developer Mode:

1. Open **Settings** on your Android device
2. Scroll to **About Phone** (or **About Device**)
3. Find **Build Number** and tap it 7 times
4. You should see a message saying "You are now a developer!"
5. Go back to Settings and open **Developer Options**
6. Enable **USB Debugging**
7. Connect your phone to your computer via USB cable
8. A prompt will appear on your phone asking to "Allow USB debugging" - tap **Allow**

### 3. Verify Your Device is Connected

Run this command to check if your device is detected:

```bash
adb devices
```

You should see your device listed. If not:
- Make sure USB debugging is enabled
- Try a different USB cable
- Install/update ADB drivers for your device

### 4. Start the Metro Bundler

Metro is the JavaScript bundler for React Native. Start it with:

```bash
npm start
```

Keep this terminal window open - Metro needs to run while you're developing.

### 5. Run the App on Your Phone

In a new terminal window, run:

```bash
npm run android
```

This command will:
- Build the Android app
- Install it on your connected device
- Launch the app automatically

The first build may take a few minutes. Subsequent builds will be faster.

## What You'll See

The app displays:
- A friendly "Hello, React Native!" greeting
- A welcome message
- Information about getting started
- A tip about the developer menu

The app automatically adapts to your phone's dark/light mode setting!

## Making Changes

1. Open `App.tsx` in your favorite code editor
2. Make changes to the code
3. Save the file
4. The app will automatically reload on your phone (Fast Refresh)

If the app doesn't reload automatically:
- Shake your device to open the developer menu
- Tap "Reload"

## Developer Menu

To access the developer menu:
- **Physical device**: Shake the device
- **Android Emulator**: Press `Ctrl+M` (Windows/Linux) or `Cmd+M` (macOS)

From the menu, you can:
- Reload the app
- Enable/disable Fast Refresh
- Start remote debugging
- Show element inspector

## Troubleshooting

### "command not found: adb"

ADB (Android Debug Bridge) is not in your PATH. You need to:
1. Find your Android SDK location (usually `~/Android/Sdk` on Mac/Linux or `%LOCALAPPDATA%\Android\Sdk` on Windows)
2. Add `platform-tools` to your PATH:
   - On Mac/Linux: Add to `~/.bashrc` or `~/.zshrc`:
     ```bash
     export ANDROID_HOME=$HOME/Android/Sdk
     export PATH=$PATH:$ANDROID_HOME/platform-tools
     ```
   - On Windows: Add `%LOCALAPPDATA%\Android\Sdk\platform-tools` to your PATH environment variable

### Build Failed

If the build fails:
1. Make sure you have Android SDK Platform 35 installed
2. Check that `ANDROID_HOME` environment variable is set correctly
3. Try cleaning the build: `cd android && ./gradlew clean && cd ..`
4. Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Device Not Detected

- Enable USB debugging on your phone
- Try revoking USB debugging authorizations in Developer Options, then reconnect
- Install manufacturer-specific USB drivers
- Try a different USB cable (some cables are charge-only)

### Metro Bundler Issues

If Metro crashes or has issues:
- Kill existing Metro processes: `npx react-native start --reset-cache`
- Clear watchman: `watchman watch-del-all`

## Project Structure

```
HelloApp/
├── App.tsx              # Main app component
├── index.js             # Entry point
├── package.json         # Dependencies and scripts
├── android/             # Android native code
│   ├── app/
│   │   ├── src/main/
│   │   │   ├── java/com/helloapp/  # Java/Kotlin files
│   │   │   └── AndroidManifest.xml
│   │   └── build.gradle            # App-level Gradle config
│   └── build.gradle                # Project-level Gradle config
└── node_modules/        # Installed dependencies (not in git)
```

## Next Steps

Now that you have a working React Native app, you can:

1. **Learn React Native**: Check out the [official documentation](https://reactnative.dev/)
2. **Add more components**: Try adding buttons, inputs, and other UI elements
3. **Use native features**: Access the camera, GPS, sensors, etc.
4. **Install packages**: Add libraries from npm like navigation, state management, etc.
5. **Style your app**: Experiment with StyleSheet and Flexbox layout

## Useful Commands

- `npm start` - Start Metro bundler
- `npm run android` - Build and run on Android
- `npm test` - Run tests
- `adb devices` - List connected devices
- `adb logcat` - View device logs

## Resources

- [React Native Documentation](https://reactnative.dev/)
- [React Native Tutorial](https://reactnative.dev/docs/tutorial)
- [React Documentation](https://react.dev/)
- [Android Developer Guide](https://developer.android.com/)

## License

This is a starter template - feel free to use it however you like!

---

Happy coding! 🚀
