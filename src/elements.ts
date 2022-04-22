import { unpermissifyOptional, unpermissifyChildren } from "./helpers";
import {
  BlorpElementNode,
  PermissiveChildren,
  Optional,
  Component,
  PermissiveOptional,
  BaseProps,
  BlorpFragmentNode,
} from "./types";

type Args<PropTypes> =
  | []
  | [PermissiveChildren]
  | [PermissiveOptional<PropTypes>, PermissiveChildren];

export const tag =
  <PropTypes extends BaseProps = { [key: string]: any }>(tag: string) =>
  (...args: Args<PropTypes>): BlorpElementNode => {
    let props: Optional<PropTypes>;
    let children: Optional<Component[]> = undefined;
    if (args.length === 0) {
      props = undefined;
      children = undefined;
    } else if (args.length === 1) {
      props = undefined;
      children = unpermissifyChildren(args[0]);
    } else {
      props = unpermissifyOptional(args[0]);
      children = unpermissifyChildren(args[1]);
    }
    return {
      _blorp: true,
      type: "element",
      tag,
      children,
      props: props || {},
    };
  };

export const frag = (
  permissiveChildren: PermissiveChildren
): BlorpFragmentNode => {
  const children = unpermissifyChildren(permissiveChildren);
  return {
    _blorp: true,
    type: "fragment",
    children: children || [],
  };
};

/* Removed elements: var, head, body, html, script, style, title, link, noscript */
/* There are likely others that are missed right now */
export const a = tag("a");
export const abbr = tag("abbr");
export const address = tag("address");
export const area = tag("area");
export const article = tag("article");
export const aside = tag("aside");
export const audio = tag("audio");
export const b = tag("b");
export const base = tag("base");
export const bdi = tag("bdi");
export const bdo = tag("bdo");
export const blockquote = tag("blockquote");
export const br = tag("br");
export const button = tag("button");
export const canvas = tag("canvas");
export const caption = tag("caption");
export const cite = tag("cite");
export const code = tag("code");
export const col = tag("col");
export const colgroup = tag("colgroup");
export const data = tag("data");
export const datalist = tag("datalist");
export const dd = tag("dd");
export const del = tag("del");
export const details = tag("details");
export const dfn = tag("dfn");
export const dialog = tag("dialog");
export const div = tag("div");
export const dl = tag("dl");
export const dt = tag("dt");
export const em = tag("em");
export const embed = tag("embed");
export const fieldset = tag("fieldset");
export const figure = tag("figure");
export const figcaption = tag("figcaption");
export const footer = tag("footer");
export const form = tag("form");
export const h1 = tag("h1");
export const h2 = tag("h2");
export const h3 = tag("h3");
export const h4 = tag("h4");
export const h5 = tag("h5");
export const h6 = tag("h6");
export const head = tag("head");
export const header = tag("header");
export const hgroup = tag("hgroup");
export const hr = tag("hr");
export const i = tag("i");
export const iframe = tag("iframe");
export const img = tag("img");
export const input = tag("input");
export const ins = tag("ins");
export const kbd = tag("kbd");
export const label = tag("label");
export const legend = tag("legend");
export const li = tag("li");
export const link = tag("link");
export const main = tag("main");
export const map = tag("map");
export const mark = tag("mark");
export const menu = tag("menu");
export const menuitem = tag("menuitem");
export const meta = tag("meta");
export const meter = tag("meter");
export const nav = tag("nav");
export const object = tag("object");
export const ol = tag("ol");
export const optgroup = tag("optgroup");
export const option = tag("option");
export const output = tag("output");
export const p = tag("p");
export const param = tag("param");
export const pre = tag("pre");
export const progress = tag("progress");
export const q = tag("q");
export const rb = tag("rb");
export const rp = tag("rp");
export const rt = tag("rt");
export const rtc = tag("rtc");
export const ruby = tag("ruby");
export const s = tag("s");
export const samp = tag("samp");
export const section = tag("section");
export const select = tag("select");
export const small = tag("small");
export const source = tag("source");
export const span = tag("span");
export const strong = tag("strong");
export const sub = tag("sub");
export const summary = tag("summary");
export const sup = tag("sup");
export const table = tag("table");
export const tbody = tag("tbody");
export const td = tag("td");
export const template = tag("template");
export const textarea = tag("textarea");
export const tfoot = tag("tfoot");
export const th = tag("th");
export const thead = tag("thead");
export const time = tag("time");
export const title = tag("title");
export const tr = tag("tr");
export const track = tag("track");
export const u = tag("u");
export const ul = tag("ul");
export const video = tag("video");
export const wbr = tag("wbr");
