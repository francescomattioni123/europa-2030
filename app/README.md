# Europa 2030 · app iOS (Capacitor)

L'app nativa impacchetta la stessa pagina della cartella principale. Nell'app i dati vengono scaricati dalla pagina pubblicata (sempre aggiornati) con riserva sui file inclusi.

Preparazione (una volta): `npm install`, poi `npm run www` per copiare la pagina e i dati in `www/`, `npx cap sync ios`.
Build simulatore: `xcodebuild -workspace ios/App/App.xcworkspace -scheme App -configuration Debug -sdk iphonesimulator -destination 'platform=iOS Simulator,name=iPhone 17 Pro' -derivedDataPath build CODE_SIGNING_ALLOWED=NO build`
Per l'App Store: aprire `ios/App/App.xcworkspace` in Xcode, impostare il team Apple Developer in Signing & Capabilities, archiviare e caricare con Xcode Organizer.
