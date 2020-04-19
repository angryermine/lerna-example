import {Dictionary} from '@monorepo/typings';

type Mods = Dictionary<boolean | string | undefined>;
type Args = [] | [string | Mods] | [string | Mods, Mods];

function createModifiers(block: string, mods: Mods) {
  return Object.entries(mods).reduce((acc, [key, val]) => {
    if (typeof val === 'string') {
      return `${acc} ${block}--${key}-${val}`;
    }

    return val ? `${acc} ${block}--${key}` : acc;
  }, '');
}

export function bem(block: string) {
  return function(...args: Args) {
    if (typeof args[0] === 'string') {
      const result = `${block}__${args[0]}`;
      return args[1] ? `${result}${createModifiers(result, args[1])}` : result;
    }

    return args[0] ? `${block}${createModifiers(block, args[0])}` : block;
  };
}
