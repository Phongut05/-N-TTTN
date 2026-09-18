# Upgrade Expo Project to SDK 57

This plan outlines the steps to upgrade the fitness-app project from Expo SDK 54 to SDK 57 to resolve the compatibility issue with the Expo Go app.

## Proposed Changes

### Configuration Updates

#### [MODIFY] [package.json](file:///D:/projectmobile-master/package.json)
- Update `expo` to `~57.0.0`.
- Update other `expo-*` dependencies to compatible versions.

#### [MODIFY] [app.json](file:///D:/projectmobile-master/app.json)
- Update `sdkVersion` to `57.0.0`.

### Dependency Resolution

- Run `npm install` to update the lockfile.
- Run `npx expo install --fix` to automatically align all Expo-related dependencies with SDK 57.

## Verification Plan

### Automated Tests
- Run `npm run typecheck` to check for any TypeScript errors introduced by the upgrade.
- Run `npm run test` to verify core logic (formulas, workout service, etc.) still works.

### Manual Verification
- Start the development server using `npx expo start`.
- The user should then be able to open the app in Expo Go (SDK 57) without the compatibility error.
