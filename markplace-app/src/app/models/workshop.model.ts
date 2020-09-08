export class Workshop {
  title: string;
  author: string;
  part?: Part[];
}

export class Part {
  topic: Topic;
  description?: string;
}

export class Topic {
  duration?: string;
  points?: string[];
}
