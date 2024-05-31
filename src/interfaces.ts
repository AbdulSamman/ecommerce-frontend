export interface IAppProvider {
    children: React.ReactNode;

  }

  export interface IAppContext {
    rotateBox:number;
    currentSubtitle: number;
    positionImg:number

  }

  export interface HandleScroll {
    (event: Event, scrollY: number): void;
    prevScrollPosition?: number;
  }

  export const subtitle=[
   "Website","Instagram", "Facebook","TikTok","Amazon","Ebay","Everywhere Online",
  ]