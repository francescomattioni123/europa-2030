#!/bin/sh
# Archivia e carica una nuova build su TestFlight. Log completo in build/testflight.log.
# Prerequisiti: chiave API in ~/.appstoreconnect/private_keys, portachiavi europa2030 con il certificato di distribuzione.
export LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8
cd "$(dirname "$0")" || exit 1
KEY_ID=9GT5MFM9KW; ISSUER=998d665e-0a5c-45a6-b302-f49eb1b16aa9
mkdir -p build; LOG=build/testflight.log; : > "$LOG"
# numero di build progressivo
N=$(grep -m1 -o 'CURRENT_PROJECT_VERSION = [0-9]*' ios/App/App.xcodeproj/project.pbxproj | grep -o '[0-9]*$'); NEXT=$((N + 1))
sed -i '' "s/CURRENT_PROJECT_VERSION = $N;/CURRENT_PROJECT_VERSION = $NEXT;/g" ios/App/App.xcodeproj/project.pbxproj
echo "Build numero $NEXT"
security unlock-keychain -p eu30-keychain ~/Library/Keychains/europa2030.keychain-db || { echo "portachiavi non sbloccato"; exit 1; }
npm run -s sync >> "$LOG" 2>&1 || { echo "sync fallito, vedi $LOG"; exit 1; }
rm -rf build/App.xcarchive build/export
xcodebuild -workspace ios/App/App.xcworkspace -scheme App -configuration Release -destination 'generic/platform=iOS' -archivePath build/App.xcarchive CODE_SIGN_STYLE=Manual archive >> "$LOG" 2>&1 || { echo "archivio fallito, vedi $LOG"; grep -E ": error|errSec" "$LOG" | head -5; exit 1; }
echo "Archivio creato"
xcodebuild -exportArchive -archivePath build/App.xcarchive -exportOptionsPlist ios/ExportOptions.plist -exportPath build/export -authenticationKeyPath ~/.appstoreconnect/private_keys/AuthKey_$KEY_ID.p8 -authenticationKeyID $KEY_ID -authenticationKeyIssuerID $ISSUER >> "$LOG" 2>&1 || { echo "upload fallito, vedi $LOG"; grep -iE "error" "$LOG" | tail -5; exit 1; }
echo "Caricata la build $NEXT: compare su App Store Connect > TestFlight dopo l'elaborazione (5-15 minuti)."
