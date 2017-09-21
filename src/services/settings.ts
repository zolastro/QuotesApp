export class SettingsService {
  private alternativeBackground = false;

  setBackground(isAlternative: boolean) {
    this.alternativeBackground = isAlternative;
  }

  usesAlternativeBackground() {
    return this.alternativeBackground;
  }
}