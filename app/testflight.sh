#!/bin/sh
# Archivia e carica su TestFlight. Prerequisiti: Apple Developer Program attivo, Apple ID collegato in Xcode (Settings > Accounts),
# team impostato in Signing & Capabilities, app creata su App Store Connect con bundle id it.europa2030.app.
set -e
export LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8
cd "$(dirname "$0")"
npm run sync
xcodebuild -workspace ios/App/App.xcworkspace -scheme App -configuration Release -destination 'generic/platform=iOS' -archivePath build/App.xcarchive -allowProvisioningUpdates archive
xcodebuild -exportArchive -archivePath build/App.xcarchive -exportOptionsPlist ios/ExportOptions.plist -exportPath build/export -allowProvisioningUpdates
echo "Caricata: compare su App Store Connect > TestFlight entro qualche minuto."
