# HelloApp - React Native with Expo

A simple React Native app using Expo to get you started with mobile development on Android!

> **Important:** This was developed in Claude Code's web environment. To run it on your phone, you'll need to clone this repo to your actual laptop and run it from there.

## Quick Start

### Prerequisites

- **On your laptop:** Node.js 18 or newer
- **On your phone:** Install "Expo Go" (free from Google Play Store)
- Both devices on the **same WiFi network**

### Step 1: Clone to Your Laptop

First, clone this repository to your **actual laptop** (not the Claude Code web environment):

```bash
git clone <your-repo-url>
cd ReactNative
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start the Development Server

```bash
npm start
```

This will show you a QR code in the terminal.

### Step 4: Open on Your Phone

**Make sure your laptop and phone are on the same WiFi!**

1. Open the "Expo Go" app on your phone
2. Tap "Scan QR code"
3. Point your camera at the QR code in your terminal
4. The app will load automatically!

**That's it!** No USB cable needed, no Android Studio required.

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

### "Unable to connect to development server"

This usually means your laptop and phone aren't on the same network.

**Solutions:**
- Ensure both devices are on the **same WiFi network**
- Disable VPN on both devices
- Don't use guest WiFi (they often isolate devices)
- Try restarting your router
- Check if your firewall is blocking connections

### QR Code Won't Scan

**Solutions:**
- Make sure the QR code is fully visible
- Increase screen brightness
- Use "Enter URL manually" in Expo Go instead
- The URL format is: `exp://192.168.X.X:8081`

### App Won't Load or Crashes

**Solutions:**
- In Expo Go, go to Settings → Clear cache
- Restart the Expo Go app
- Stop the dev server (`Ctrl+C`) and run `npm start` again
- Delete `node_modules` folder and run `npm install` again

### "Network request failed"

This means your phone can't reach your laptop.

**Solutions:**
- Confirm you're on the same WiFi network
- Check if your router has "AP Isolation" enabled (disable it)
- Try using your laptop's IP address manually in Expo Go

## Why Expo?

Expo makes React Native development super easy:
- ✓ **No Android Studio needed** - Just Node.js
- ✓ **No USB cable required** - Connect over WiFi
- ✓ **Instant updates** - See changes immediately
- ✓ **Easy sharing** - Send a QR code to anyone to test
- ✓ **Access device features** - Camera, GPS, notifications, etc.

## Project Structure

```
HelloApp/
├── App.tsx              # Main app component (EDIT THIS!)
├── app.json             # Expo configuration
├── package.json         # Dependencies and scripts
├── android/             # Android native files (can ignore with Expo)
└── node_modules/        # Installed packages (auto-generated)
```

## Next Steps

Now that you have a working React Native app, you can:

1. **Learn React Native**: Check out the [official documentation](https://reactnative.dev/)
2. **Add more components**: Try adding buttons, inputs, and other UI elements
3. **Use native features**: Access the camera, GPS, sensors, etc.
4. **Install packages**: Add libraries from npm like navigation, state management, etc.
5. **Style your app**: Experiment with StyleSheet and Flexbox layout

## Useful Commands

- `npm start` - Start Expo development server
- `npm run android` - Open on Android emulator (requires Android Studio)
- `npm run web` - Run in web browser

## Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [Expo Go App](https://expo.dev/client)
- [React Documentation](https://react.dev/)

## License

This is a starter template - feel free to use it however you like!

---

Happy coding! 🚀
