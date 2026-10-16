#!/bin/sh
# Archivia e carica una nuova build su TestFlight (firma manuale con il profilo "Europa 2030 App Store").
# Richiede: chiave API in ~/.appstoreconnect/private_keys, portachiavi europa2030 con il certificato di distribuzione.
set -e
export LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8
cd "$(dirname "$0")"
KEY_ID=9GT5MFM9KW; ISSUER=998d665e-0a5c-45a6-b302-f49eb1b16aa9
security unlock-keychain -p eu30-keychain ~/Library/Keychains/europa2030.keychain-db
npm run -s sync
rm -rf build/App.xcarchive build/export
xcodebuild -workspace ios/App/App.xcworkspace -scheme App -configuration Release -destination 'generic/platform=iOS' -archivePath build/App.xcarchive CODE_SIGN_STYLE=Manual archive | grep -E "error:|ARCHIVE SUCCEEDED|ARCHIVE FAILED"
xcodebuild -exportArchive -archivePath build/App.xcarchive -exportOptionsPlist ios/ExportOptions.plist -exportPath build/export -authenticationKeyPath ~/.appstoreconnect/private_keys/AuthKey_$KEY_ID.p8 -authenticationKeyID $KEY_ID -authenticationKeyIssuerID $ISSUER | grep -E "error|Uploaded|EXPORT SUCCEEDED|EXPORT FAILED"
echo "Caricata: compare su App Store Connect > TestFlight dopo l'elaborazione."
