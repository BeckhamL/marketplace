export class Workshop {
  title: string;
  author: string;
  part?: Part[];
}

export class Part {
  topic?: Topic[];
}

export class Topic {
  title: string;
  description?: string;
  duration?: string;
  points?: string[];
}
