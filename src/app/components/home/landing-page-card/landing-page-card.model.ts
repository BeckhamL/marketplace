export class LandingCardConfig {
  imagePosition: LandingCardPosition;
  textPosition: LandingCardPosition;
  imageValue: string;
  textValue: string;
}

export enum LandingCardPosition {
  left = 'left',
  right = 'right',
  center = 'center',
}
